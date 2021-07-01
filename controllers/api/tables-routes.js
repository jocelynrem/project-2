const router = require('express').Router();

// once tables on mysql are created, here we need to import the table model
// const Tables = require('../../models/Tables');

router.get('/', (req, res) => {
  // find all tables
  try {
    res.status(200).json({ message: 'api route for tables Data' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
