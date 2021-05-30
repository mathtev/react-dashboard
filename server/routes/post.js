module.exports = (app) => {
  app.get('/post/:id', function(req, res, next) {
    res.send(`hello world ${req.params.id}`);
    next();
  });
};
