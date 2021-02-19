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

app.listen(4000, () => console.log("listenning to port 4000"));
