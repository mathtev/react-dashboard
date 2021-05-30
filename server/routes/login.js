const jwt = require('jsonwebtoken');
const User = require('../../src/data/models/LoginUser');
const createSession = require('../amqp/publisher');

const fakeData = { greeting: 'welcome', name: 'Unknown' };


module.exports = (app) => {
  app.post('/login', async (req, res) => {

    createSession(fakeData);
    let user;
    const login = req.body.login; // eslint-disable-line
    const password = req.body.password; // eslint-disable-line
    if (login === 'user' && password === 'password') {
      user = { user, login };
    } else {
      user = await User.findOne({
        where: {
          username: req.body.login,
          password: req.body.password,
        },
      });
      user = user ? user.toJSON() : null;
    }

    if (user) {
      const expiresIn = 60 * 60 * 24 * 180; // 180 days
      const token = jwt.sign(user, 'React Dashboard', { expiresIn });
      res.cookie('id_token', token, {
        maxAge: 1000 * expiresIn,
        httpOnly: false,
      });
      res.json({ user });
    } else {
      res
        .status(401)
        .json({ message: 'To login use user: "user", password: "password".' });
    }
  });
};
