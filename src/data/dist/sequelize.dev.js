"use strict";

var _require = require('sequelize'),
    Sequelize = _require.Sequelize;

module.exports = new Sequelize('sequelize', 'postgres', '12346', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    freezeTableName: true
  }
});