const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('../src/data/schema.js');

//database
const db = require('../src/data/sequelize.js');

db.authenticate()
  .then(() => {console.log('Connection has been established successfully.')})
  .catch(err => {console.error('Unable to connect to the database:', err)});


const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const PORT = process.env.REACT_APP_PORT || 4000;

app.listen(4000, () => console.log(`server listenning to port ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
  console.log(`Unhandled Rejection: ${err.message}`)
  // Close server 
  server.close(() => process.exit(1))
})