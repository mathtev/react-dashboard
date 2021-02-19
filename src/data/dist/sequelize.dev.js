"use strict";

var _require = require('sequelize'),
    Sequelize = _require.Sequelize;

module.exports = new Sequelize('sequelize', 'postgres', 'cezram36', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    freezeTableName: true
  }
});