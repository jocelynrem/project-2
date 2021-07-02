const router = require('express').Router();
const { User } = require('../../models');

// use for user signup
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    console.log('userData:', userData);

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;
      console.log('req!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', req);

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// use for user login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// use for user logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
