const DataType = require('sequelize');
const Model = require('../sequelize');


module.exports = Model.define('LoginUser', {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },
  username: {
    type: DataType.STRING(255),
    unique: true,
  },
  email: {
    type: DataType.STRING(255),
    unique: true,
  },
  password: DataType.STRING(255),
});

