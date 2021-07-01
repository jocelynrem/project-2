const router = require('express').Router();
const tableRoutes = require('./tables-routes');

router.use('/tables', tableRoutes);

module.exports = router;
