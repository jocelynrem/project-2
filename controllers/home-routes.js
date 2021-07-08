const router = require('express').Router();
// eslint-disable-next-line no-unused-vars
const { Guest, Event } = require('../models');
// eslint-disable-next-line no-unused-vars
const withAuth = require('../utils/auth'); // to be used for authenticated routes

// home page
router.get('/', async (req, res) => {
  try {
    console.log('went to root page route');
    res.render('login', {
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create account page
router.get('/createaccount', async (req, res) => {
  try {
    console.log('went to login route');
    res.render('createAccount');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// route for dashboard
router.get(
  '/dashboard/:adminId',
  withAuth, async (req, res) => {
    try {
      res.render('dashboard', {
        loggedIn: req.session.loggedIn
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

// route for createSeating
router.get(
  '/upload/:adminId',
  /* withAuth, */ async (req, res) => {
    try {
      res.render('createSeating');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

// route for the theme page
router.get(
  '/theme/:adminId',
  /* withAuth, */ async (req, res) => {
    try {
      res.render('theme');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

// route for view seating page
router.get(
  '/viewseating/:adminId',
  /* withAuth, */ async (req, res) => {
    try {
      const viewEventOptions = await Event.findAll({
        where: {
          adminId: req.params.adminId
        }
      });

      const events = viewEventOptions.map((event) =>
        event.get({ plain: true })
      );

      res.render('viewSeating', { events }); // passing the events for the specific admin for handlebars
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

// route for view seating for tables/guests for a specific event

// route for view seating page
router.get(
  '/viewseating/:adminId/:eventId',
  /* withAuth, */ async (req, res) => {
    try {
      const eventData = await Event.findAll({
        where: {
          adminId: req.params.adminId,
          eventId: req.params.eventId
        }
      });
      // console.log('eventData:', eventData);
      const guestData = await Guest.findAll({
        where: {
          eventId: req.params.eventId
        }
      });
      const events = eventData.map((event) => event.get({ plain: true }));
      const guests = guestData.map((guest) => guest.get({ plain: true }));

      res.render('viewSeating', { events }, { guests }); // passing the events for the specific admin for handlebars
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

module.exports = router;
