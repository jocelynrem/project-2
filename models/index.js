// import models
const Admin = require('./Admin');
const Event = require('./Event');
const Guest = require('./Guest');

// Event belongs to Admin
Event.belongsTo(Admin, {
  foreignKey: 'adminId'
});

// Admin has many Events
Admin.hasMany(Event, {
  foreignKey: 'adminId',
  onDelete: 'CASCADE'
});

// Guest belongs to Event
Guest.belongsTo(Event, {
  foreignKey: 'eventId'
});

// Event has many Guests
Event.hasMany(Guest, {
  foreignKey: 'eventId',
  onDelete: 'CASCADE'
});

module.exports = {
  Admin,
  Event,
  Guest
};
