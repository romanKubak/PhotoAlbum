const bcrypt = require('bcrypt');
const { User } = require('../db/models');

async function logOut(req, res) {
  if(req.session.superuser) {
    await req.session.destroy();
    res.clearCookie('MyCookieName');
    res.redirect('/login');
  } else {
    res.redirect('/');
  }
}

module.exports = { logOut }
