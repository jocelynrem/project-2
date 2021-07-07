const router = require('express').Router();
// eslint-disable-next-line no-unused-vars
const { Guest } = require('../models');
// eslint-disable-next-line no-unused-vars
const withAuth = require('../utils/auth'); // to be used for authenticated routes

// home page
router.get('/', async (req, res) => {
  try {
    console.log('went to root page route');
    res.render('login');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create account page
router.get('/createaccount', async (req, res) => {
  try {
    console.log('went to login route');
    res.render('createAccount');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard/:adminId', /* withAuth, */ async (req, res) => {
  try {
    res.render('dashboard');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/upload/:adminId', /* withAuth, */ async (req, res) => {
  try {
    res.render('createSeating');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/theme/:adminId', /* withAuth, */ async (req, res) => {
  try {
    res.render('theme');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/viewseating/:adminId', /* withAuth, */ async (req, res) => {
  try {
    res.render('viewSeating');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
