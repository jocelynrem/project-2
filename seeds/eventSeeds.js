const { Event } = require('../models');

const eventData = [
  {
    adminId: 1,
    eventName: 'Graduation',
    QRCode: 'sample.jpg'
  },
  {
    adminId: 1,
    eventName: 'Funeral',
    QRCode: 'sample2.jpg'
  }
];

const seedEvent = () => Event.bulkCreate(eventData);

module.exports = seedEvent;
