const router = require('express').Router();

// once Tables table on mysql is created, here we need to import the table model
// const Table = require('../../models/Tables');  <== uncomment when tables model is created

router.get('/', (req, res) => {
  // find all table
  try {
    res.status(200).json({ message: 'api route for all Tables Data' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
