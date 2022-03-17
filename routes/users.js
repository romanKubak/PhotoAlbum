const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

// Подключаю контролеры
const { logOut, registration } =  require('../controlers/usersControlers')

router.get('/registration', (req, res) => {
  res.render('users/registration');
});

router.get('/login', (req, res) => {
  res.render('users/login');
});

router.get('/loguot', logOut);

router.post('/registration', registration);

router.post('/login', async (req, res) => {
  const { login, password } = req.body;

  const user = await User.findOne({ where: { login } });

  let passwordCheck;
  if (user !== null) {
    passwordCheck = await bcrypt.compare(password, user.password);
  }
  // console.log(passwordCheck)
  if (passwordCheck && user !== null) {
    req.session.superuser = user.dataValues.login;
    res.redirect('/');
  } else {
    res.redirect('/login');
    // err.style.visibility = 'visible';
    console.log('\n=======   неверный пароль   =======\n');
  }
});

module.exports = router;
