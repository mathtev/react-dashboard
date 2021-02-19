const DataType = require('sequelize');

const Model = require('../sequelize');


module.exports = Model.define('Post', {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },
    title: {
      type: DataType.STRING(255),
      defaultValue: false,
      validate: { notEmpty: true },
    },
    content: {
      type: DataType.STRING(255),
      defaultValue: false,
    },
  }, 
  {
    indexes: [{
      fields: ['title'] }],
  }
);