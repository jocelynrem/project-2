// to be used to add paths
const path = require('path');
// to be used for routing handling

const express = require('express');

// to be used to session creation
const session = require('express-session');

// to be used for halndlebars templates
// const exphbs = require('express-handlebars');

// importing routes
// const routes = require('./controllers');

// to be used as an ORM
const sequelize = require('./config/connection');

// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 8080;

const sess = {
  secret: 'Super secret secret',
  // Express session will use cookies by default, but we can specify options for those cookies by adding a cookies property to our session options.
  cookie: {
    // maxAge sets the maximum age for the session to be active. Listed in milliseconds.
    maxAge: 3600,
    // httpOnly tells express-session to only store session cookies when the protocol being used to connect to the server is HTTP.
    httpOnly: true,
    // secure tells express-session to only initialize session cookies when the protocol being used is HTTPS. Having this set to true, and running a server without encryption will result in the cookies not showing up in your developer console.
    secure: false,
    // sameSite tells express-session to only initialize session cookies when the referrer provided by the client matches the domain out server is hosted from.
    sameSite: 'strict'
  },
  resave: false,
  saveUninitialized: false,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize
  })
};

// use express session
app.use(session(sess));

// to be turned on if handlebars is used
// const hbs = exphbs.create({});
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// to be used once we create routes
// app.use(routes);

// synchronization for server and DB
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
});
