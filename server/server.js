const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require(`cookie-parser`);
const expressJwt = require(`express-jwt`);

const User = require('../src/data/models/LoginUser');
const schema = require('../src/data/schema.js');
const chartsData = require('./serverData/charts.js');


//database
const db = require('../src/data/sequelize.js');

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  expressJwt({
    algorithms: ['RS256'],
    secret: 'React Dashboard',
    credentialsRequired: false,
    getToken: (req) => req.cookies.id_token,
  })
);

app.post('/login', async (req, res) => {
  // replace with real database check in production
  // const user = graphql.find(req.login, req.password);
  let user = await User.findOne({
    where: {
      username: req.body.login,
      password: req.body.password
    }
  });
  const login = req.body.login; // eslint-disable-line
  const password = req.body.password; // eslint-disable-line
  if (login === 'user' && password === 'password') {
    user = { user, login };
  }

  if (user) {
    const expiresIn = 60 * 60 * 24 * 180; // 180 days
    const token = jwt.sign(user.toJSON(), 'React Dashboard', { expiresIn });
    res.cookie('id_token', token, {
      maxAge: 1000 * expiresIn,
      httpOnly: false,
    });
    res.json({ user });
  } else {
    res
      .status(401)
      .json({ message: 'To login use user: "user", password: "password".' });
  }
});

app.use(
  '/graphql',
  graphqlHTTP((req, resp) => {
    return {
      schema,
      graphiql: true,
    };
  })
);

app.get('/post/:id', function (req, res, next) {
  res.send(`hello world ${req.params.id}`);
  next();
});

app.get('/api/charts', function (req, res, next) {
  res.send(chartsData);
  next();
});

const PORT = process.env.REACT_APP_PORT || 4000;

app.listen(PORT, () => console.log(`server listenning to port ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
  console.log(`Unhandled Rejection: ${err.message}`);
  // Close server
  server.close(() => process.exit(1));
});
