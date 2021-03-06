const router = require('express').Router();
const eventsRoutes = require('./events-routes');
const adminRoutes = require('./admin-routes');
const tablesRoutes = require('./tables-routes');
const fileRoutes = require('./upload-route');

router.use('/file', fileRoutes);
router.use('/tables', tablesRoutes);
router.use('/events', eventsRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
