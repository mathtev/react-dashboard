const chartsData = require('../serverData/charts.js');

module.exports = (app) => {
  app.get('/api/charts', function(req, res, next) {
    res.send(chartsData);
    next();
  });
};
