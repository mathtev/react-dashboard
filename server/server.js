const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require( `cors` );

const schema = require('../src/data/schema.js');
const chartsData = require('./serverData/charts.js');

//database
const db = require('../src/data/sequelize.js');

db.authenticate()
  .then(() => {console.log('Connection has been established successfully.')})
  .catch(err => {console.error('Unable to connect to the database:', err)});


const app = express();

app.use( cors() );

app.use('/graphql', graphqlHTTP((req, resp) => {
  return {
    schema,
    graphiql: true 
  }
}));

app.get('/post/:id', function (req, res, next) {
  res.send('hello world');
  next();
});

app.get('/api/charts', function (req, res, next) {
  res.send(chartsData);
  next();
});


const PORT = process.env.REACT_APP_PORT || 4000;

app.listen(PORT, () => console.log(`server listenning to port ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
  console.log(`Unhandled Rejection: ${err.message}`)
  // Close server 
  server.close(() => process.exit(1))
})