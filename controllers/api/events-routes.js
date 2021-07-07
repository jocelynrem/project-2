const router = require('express').Router();
const { Event, Guest } = require('../../models');

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

module.exports = router;
