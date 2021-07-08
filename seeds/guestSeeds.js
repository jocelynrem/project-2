const { Guest } = require('../models');

const guestData = [
  {
    firstName: 'Adam',
    lastName: 'Apple',
    tableNumber: 1,
    eventId: 1
  },
  {
    firstName: 'Billy',
    lastName: 'Banana',
    tableNumber: 1,
    eventId: 1
  },
  {
    firstName: 'Carmen',
    lastName: 'Cantaloupe',
    tableNumber: 2,
    eventId: 1
  },
  {
    firstName: 'Danny',
    lastName: 'Durian',
    tableNumber: 2,
    eventId: 1
  },
  {
    firstName: 'Emily',
    lastName: 'Elderberry',
    tableNumber: 1,
    eventId: 2
  },
  {
    firstName: 'Franklin',
    lastName: 'Fig',
    tableNumber: 1,
    eventId: 2
  },
  {
    firstName: 'Gary',
    lastName: 'Grape',
    tableNumber: 2,
    eventId: 2
  },
  {
    firstName: 'Henry',
    lastName: 'HoneyDew',
    tableNumber: 2,
    eventId: 2
  }
];

const seedGuest = () => Guest.bulkCreate(guestData);

module.exports = seedGuest;
