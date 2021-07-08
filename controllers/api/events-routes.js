const router = require('express').Router();
// const qr = require('qr-image');
// const fs = require('fs');
// const path = require('path');
const { Event, Guest } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const eventData = await Event.findAll();
    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
    console.log('err:', err);
  }
});

// get all events by admin
router.get('/:adminId', async (req, res) => {
  try {
    const eventData = await Event.findAll({
      where: {
        adminId: req.params.adminId
      }
    });
    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get an event by admin (including guests)
router.get('/:adminId/:eventId', async (req, res) => {
  try {
    const eventData = await Event.findAll({
      where: {
        adminId: req.params.adminId,
        eventId: req.params.eventId
      },
      include: { model: Guest }
    });
    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// creates an event for the admin
router.post('/:adminId', async (req, res) => {
  try {
    const newData = await Event.create({
      adminId: req.params.adminId,
      eventName: req.body.eventName,
      QRCode: `${req.params.adminId}_${req.body.eventName}` // temp fix until we use QRCode generator
    });

    // const qrPng = qr.image(
    //   `http://localhost:8080/guest/${req.params.adminId}/${req.body.eventName}`,
    //   { type: 'png' }
    // );
    // qrPng.pipe(fs.createWriteStream(path.join(__dirname, './uploads/qr.png')));

    // const newData = await Event.update(
    //   { QRCode: qrPng },
    //   {
    //     where: {
    //       adminId: req.params.adminId,
    //       eventName: req.body.eventName
    //     }
    //   }
    // );

    res.status(200).json(newData);
  } catch (err) {
    res.status(500).json(err);
    console.log('err:', err);
  }
});

module.exports = router;
