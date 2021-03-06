const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const cookieParser = require(`cookie-parser`);
const expressJwt = require(`express-jwt`);
const schema = require('../src/data/schema.js');

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

app.use(
  '/graphql',
  graphqlHTTP((req, resp) => {
    return {
      schema,
      graphiql: true,
    };
  })
);


require('./routes/login')(app);
require('./routes/post')(app);
require('./routes/charts')(app);


const PORT = process.env.REACT_APP_PORT || 4000;

app.listen(PORT, () => console.log(`server listenning to port ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
  console.log(`Unhandled Rejection: ${err.message}`);
  // Close server
  server.close(() => process.exit(1));
});
