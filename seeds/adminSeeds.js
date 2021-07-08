const { Admin } = require('../models');

const adminData = [
  {
    firstName: 'Adam',
    lastName: 'Apple',
    email: 'AA@icloud.com',
    password: 'd1e8a70b5ccab1dc2f56bbf7e99f064a660c08e361a35751b9c483c88943d082'
  }

];

const seedAdmin = () => Admin.bulkCreate(adminData);

module.exports = seedAdmin;
