const { Event } = require('../models');

const eventData = [
  {
    adminId: 3,
    eventName: 'Graduation',
    QRCode: 'sample.jpg'
  },
  {
    adminId: 3,
    eventName: 'Funeral',
    QRCode: 'sample2.jpg'
  }
];

const seedEvent = () => Event.bulkCreate(eventData);

module.exports = seedEvent;
