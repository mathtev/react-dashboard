const jwt = require('jsonwebtoken');
const User = require('../../src/data/models/LoginUser');
const createSession = require('../amqp/publisher');
const bcrypt = require('bcrypt');

async function comparePasswords(password, hash) {
  const isSame = await bcrypt.compare(password, hash);
  return isSame;
}

module.exports = (app) => {
  app.post('/login', async (req, res) => {
    let user;
    const login = req.body.login; // eslint-disable-line
    const password = req.body.password; // eslint-disable-line
    if (login === 'user' && password === 'password') {
      user = { user, login };
    } else {
      user = await User.findOne({
        where: {
          username: req.body.login,
        },
      });
      user = user ? user.toJSON() : null;
      const passwordMatch = await comparePasswords(req.body.password, user.password);
      if (!passwordMatch) {
        user = null;
      }
    }

    if (user) {
      createSession({
        id: user.id,
        username: user.username,
        email: user.email,
        loggedInAt: new Date().toISOString(),
      });
      const expiresIn = 60 * 60 * 24 * 180; // 180 days
      const token = jwt.sign(user, 'React Dashboard', { expiresIn });
      res.cookie('id_token', token, {
        maxAge: 1000 * expiresIn,
        httpOnly: false,
      });
      res.json({ id_token: token });
    } else {
      res
        .status(401)
        .json({ message: 'To login use user: "user", password: "password".' });
    }
  });
};
