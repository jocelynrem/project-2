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
      loggedIn: req.session.loggedIn,
      adminId: req.session.adminId
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
router.get('/dashboard/:adminId', withAuth, async (req, res) => {
  try {
    res.render('dashboard', {
      loggedIn: req.session.loggedIn,
      adminId: req.session.adminId
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// route for createSeating
router.get(
  '/upload/:adminId',
  /* withAuth, */ async (req, res) => {
    try {
      res.render('createSeating', {
        loggedIn: req.session.loggedIn,
        adminId: req.session.adminId
      });
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
      res.render('theme', {
        loggedIn: req.session.loggedIn,
        adminId: req.session.adminId
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

// route for view seating page
router.get(
  '/viewseating/:adminId',
  withAuth, async (req, res) => {
    try {
      const eventData = await Event.findAll({
        where: {
          adminId: req.params.adminId
        }
      });

      const events = eventData.map((event) => event.get({ plain: true }));

      res.render('viewSeating', {
        loggedIn: req.session.loggedIn,
        adminId: req.session.adminId,
        events: events
      }); // passing the events for the specific admin for handlebars
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

// route for view seating page WITH QUERY PARAMENTER
router.get(
  '/tables/:adminId/',
  /* withAuth, */ async (req, res) => {
    try {
      const eventData = await Event.findAll({
        where: {
          adminId: req.params.adminId
        }
      });
      // console.log('eventData:', eventData);
      const guestData = await Guest.findAll({
        where: {
          eventId: req.query.eventId
        },
        order: [
          ['tableNumber', 'ASC']
      ]
      });
      const events = eventData.map((event) => event.get({ plain: true }));
      console.log('events:', events);
      const guests = guestData.map((guest) => guest.get({ plain: true }));
      console.log('guests:', guests.length);

      // for (let index = 0; index < guests.length; index++) {
      //   const element = array[index];
        
      // }

      res.render('tables', {
        events: events,
        guests: guests
      }); // passing the events for the specific admin for handlebars
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

module.exports = router;
