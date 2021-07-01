const router = require('express').Router();

const homeRoutes = require('./home-routes.js');

// const apiRoutes = require('./api');    <= uncomment once we have api routes

router.use('/', homeRoutes);

// will be use later for the data ingestion routes
// router.use('/api', apiRoutes);       <= uncomment once we have api routes

module.exports = router;
