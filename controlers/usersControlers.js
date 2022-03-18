const bcrypt = require('bcrypt');
const { User } = require('../db/models');

async function logOut(req, res) {
  if(req.session.superuser) {
    await req.session.destroy();
    res.clearCookie('MyCookieName');
    return res.redirect('/registration');
  } else {
    return res.redirect('/');
  }
}

async function registration(req, res) {
  const { login, email, password } = req.body;
  // console.log('req.body ======> ', req.body);
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ login, email, password: hash });
  req.session.superuser = user.dataValues.login;
  return res.redirect('/');
}

module.exports = { logOut, registration }
