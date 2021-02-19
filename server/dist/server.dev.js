"use strict";

var express = require('express');

var _require = require('express-graphql'),
    graphqlHTTP = _require.graphqlHTTP;

var schema = require('../src/data/schema.js'); //database


var db = require('../src/data/sequelize.js');

db.authenticate().then(function () {
  console.log('Connection has been established successfully.');
})["catch"](function (err) {
  console.error('Unable to connect to the database:', err);
});
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));
app.listen(4000, function () {
  return console.log("listenning to port 4000");
});