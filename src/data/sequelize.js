const { Sequelize } = require('sequelize');

module.exports = new Sequelize('sequelize', 'postgres', '12346', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    freezeTableName: true,
  },
});

