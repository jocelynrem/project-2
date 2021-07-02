const router = require('express').Router();

// once Event table on mysql is created, here we need to import the event model
// const Event = require('../../models/Event');  <== uncomment when event model is created

router.get('/', (req, res) => {
  // find all events
  try {
    res.status(200).json({ message: 'api route for all Events Data' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
