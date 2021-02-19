const { Sequelize } = require('sequelize');

module.exports = new Sequelize('sequelize', 'postgres', 'cezram36', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    freezeTableName: true,
  },
});

