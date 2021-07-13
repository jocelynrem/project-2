const router = require('express').Router();
const { Admin } = require('../../models');

// use for Admin signup
router.post('/signup', async (req, res) => {
  try {
    const adminData = await Admin.create(req.body);
    // console.log('userData:', adminData);

    req.session.save(() => {
      req.session.adminId = adminData.adminId;
      req.session.loggedIn = true;

      res.status(200).json(adminData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// use for Admin login
router.post('/login', async (req, res) => {
  try {
    const adminData = await Admin.findOne({
      where: {
        email: req.body.email
      }
    });
    console.log('adminData:', adminData.adminId);

    if (!adminData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await adminData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.adminId = adminData.adminId;
      req.session.loggedIn = true;

      res.json({ user: adminData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// use for Admin logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// adding route to query the admin for redirection after signup
router.get('/admininfo', async (req, res) => {
  try {
    const adminData = await Admin.findOne({
      where: {
        email: req.query.email
      }
    });
    res.status(200).json(adminData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
