const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    console.log('went to root page route');
    res.status(200).json({ message: 'here is where the main page should be' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    console.log('went to login route');
    res.status(200).json({ message: 'here is where the login should be' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
