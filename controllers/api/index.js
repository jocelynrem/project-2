const router = require('express').Router();
const tableRoutes = require('./tables-routes');
const adminRoutes = require('./admin-routes');

router.use('/tables', tableRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
