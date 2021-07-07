const router = require('express').Router();

const homeRoutes = require('./home-routes.js');

const apiRoutes = require('./api');
router.use('/', homeRoutes);

// will be use later for the data ingestion routes
router.use('/api', apiRoutes);

module.exports = router;
