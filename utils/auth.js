const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.loggedIn) {
    res.render('notauthent');
  } else {
    res.locals.adminId = req.session.adminId;
    next();
  }
};

module.exports = withAuth;
