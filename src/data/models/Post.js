const DataType = require('sequelize');

const Model = require('../sequelize');


module.exports = Model.define('Post', {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },
  title: {
    type: DataType.STRING(255),
    defaultValue: false,
    validate: {
      notEmpty: true
    },
  },
  content: {
    type: DataType.STRING(255),
    defaultValue: false,
  },
}, {
  indexes: [{
    fields: ['title']
  }],
});