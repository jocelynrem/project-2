/* eslint-disable prefer-const */
/* eslint-disable no-undef */
const fs = require('fs');
const csv = require('fast-csv');
require('dotenv').config();
const multer = require('multer');
const router = require('express').Router();
const { Guest } = require('../../models');

global.__basedir = __dirname;

// -> Multer Upload Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/uploads/');
    console.log('__basedir:', __basedir);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// -> Express Upload RestAPIs
router.post('/uploadfile/:eventId', upload.single('uploadfile'), (req, res) => {
  let stream = fs.createReadStream(__basedir + '/uploads/' + req.file.filename);
  let csvData = [];

  let csvStream = csv
    .parse()
    .on('data', function (data) {
      csvData.push(data);
    })
    .on('end', function () {
      // Remove Header ROW
      csvData.shift();

      const guestData = csvData.map((guest) => {
        return {
          firstName: guest[0],
          lastName: guest[1],
          tableNumber: guest[2],
          eventId: req.params.eventId
        };
      });

      Guest.bulkCreate(guestData)
        .then(() => {
          res.json({
            msg: 'File uploaded/import successfully!',
            file: req.file
          });
        })
        .catch((err) => {
          res.status(500).json(err);
        });

      // delete file after saving to MySQL database
      // -> you can comment the statement to see the uploaded CSV file.
      fs.unlinkSync(__basedir + '/uploads/' + req.file.filename);
    });

  stream.pipe(csvStream);
});

module.exports = router;
