const seedAdmin = require('./adminSeeds');
const seedEvent = require('./eventSeeds');
const seedGuest = require('./guestSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedAdmin();
  console.log('\n----- Admin SEEDED -----\n');

  await seedEvent();
  console.log('\n----- Event SEEDED -----\n');

  await seedGuest();
  console.log('\n----- Guest SEEDED -----\n');

  process.exit(0);
};

seedAll();
