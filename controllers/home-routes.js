const router = require('express').Router();
const sequelize = require('../config/connection');
const { Op } = require('sequelize');
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

// create account page
router.get(
  '/createevent/:adminId',
  withAuth, async (req, res) => {
    try {
      res.render('createEvent', {
        loggedIn: req.session.loggedIn,
        adminId: req.session.adminId
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

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
router.get('/upload/:adminId', withAuth, async (req, res) => {
  try {
    const eventData = await Event.findAll({
      where: {
        adminId: req.params.adminId
      }
    });
    const events = eventData.map((event) => event.get({ plain: true }));

    res.render('createSeating', {
      loggedIn: req.session.loggedIn,
      adminId: req.session.adminId,
      events: events
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
);

router.get('/upload/:adminId/:eventId', withAuth, async (req, res) => {
  try {
    const eventData = await Event.findAll({
      where: {
        adminId: req.params.adminId
      }
    });
    const events = eventData.map((event) => event.get({ plain: true }));

    res.render('createSeating', {
      loggedIn: req.session.loggedIn,
      adminId: req.session.adminId,
      events: events
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
  withAuth, async (req, res) => {
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

// route for the QR code page
router.get(
  '/QR/:adminId',
  /* withAuth, */ async (req, res) => {
    try {
      const eventData = await Event.findAll({
        where: {
          adminId: req.params.adminId
        }
      });

      const events = eventData.map((event) => event.get({ plain: true }));

      res.render('QR', {
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

// route for view seating page
router.get('/viewseating/:adminId', withAuth, async (req, res) => {
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
});

// route for view seating page WITH QUERY PARAMENTER
router.get(
  '/tables/:adminId/',
  withAuth, async (req, res) => {
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
        order: [['tableNumber', 'ASC']]
      });

      const tablesFromGuests = await Guest.findAll({
        attributes: [
          [sequelize.fn('DISTINCT', sequelize.col('tableNumber')), 'table']
        ],
        where: {
          eventId: req.query.eventId
        }
      });

      const events = eventData.map((event) => event.get({ plain: true }));
      const guests = guestData.map((guest) => guest.get({ plain: true }));
      const tables = tablesFromGuests.map((event) =>
        event.get({ plain: true })
      );

      const tableNum = tables.map((table) => {
        return table.table;
      });

      const finalGuests = [];
      for (let y = 0; y < tableNum.length; y++) {
        let tableChart = [];
        for (let index = 0; index < guests.length; index++) {
          if (guests[index].tableNumber === tableNum[y]) {
            tableChart.push(
              `${guests[index].firstName} ${guests[index].lastName}`
            );
          }
        }
        finalGuests[y] = {
          table: tableNum[y],
          guests: tableChart
        };

        tableChart = [];
      }

      res.render('tables', {
        loggedIn: req.session.loggedIn,
        adminId: req.session.adminId,
        events: events,
        guests: finalGuests
      }); // passing the events for the specific admin for handlebars
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

// route for guest view seating page
router.get('/guestView', async (req, res) => {
  try {
    const names = req.query.fullName.split(' ');
    const firstName = names[0];
    const lastName = names.length > 1 && names[1];
    // const guestTable = await Guest.findAll({
    //   attributes: [[sequelize.fn('DISTINCT', sequelize.col('tableNumber')), 'table']],
    //   where: {
    //     firstName,
    //     lastName,
    //     eventId: req.query.eventId
    //   }
    // });

    const guestTable = await Guest.findAll({
      where: {
        firstName: {
          [Op.startsWith]: firstName
        },
        lastName: lastName,
        eventId: req.query.eventId
      }
    });

    const guestTableData = guestTable.map((event) => event.get({ plain: true }));
    console.log('guestTableData:', guestTableData)

    // const tableNumbers = guestTableData.map(table => table.table);  Liz
    const tableNumbers = guestTableData.map(table => table.tableNumber);
    console.log('tableNumbers:', tableNumbers)

    const guestData = await Guest.findAll({
      where: {
        tableNumber: { [Op.in]: tableNumbers }
      }
    });
    
    const guests = guestData.map((guest) => guest.get({ plain: true }));
    console.log('guests:', guests)

    const allGuests = (await Guest.findAll()).map(guest => guest.get({ plain: true }));

    const finalGuests = [];
    for (let i = 0; i < tableNumbers.length; i++) {
      let tableChart = [];
      for (let index = 0; index < guests.length; index++) {
        if (guests[index].tableNumber === tableNumbers[i]) {
          tableChart.push(
            `${guests[index].firstName} ${guests[index].lastName}`
            );
          }
        }
        finalGuests[i] = {
          table: tableNumbers[i],
          guests: tableChart
        };
        tableChart = [];
      }
      
    console.log('finalGuests:', finalGuests)
    res.render('guestView', {
      guests: finalGuests,
      allGuests
    }); // passing the events for the specific admin for handlebars
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/guestpage', async (req, res) => {
  res.render('guestPage');
});

module.exports = router;
