const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

// Подключаю контролеры
const { logOut } =  require('../controlers/usersControlers')

router.get('/registration', (req, res) => {
  res.render('users/registration');
});

router.get('/login', (req, res) => {
  res.render('users/login');
});

router.post('/registration', async (req, res) => {
  const { login, email, password } = req.body;
  // console.log('req.body ======> ', req.body);

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ login, email, password: hash });
  req.session.superuser = user.dataValues.login;
  res.redirect('/');
  // console.log(user)
  // req.session.superuser = user.dataValues.userName;
  // req.session.password = user.dataValues.password;
  // req.session.id = toString(user.dataValues.id)
  // console.log('req.session.password', req.session.password)
  // console.log('user.dataValues.id ====> ', user.dataValues.id)
  // console.log('user.dataValues.password ====> ', user.dataValues.password)
  // console.log('req.session.superuser ====> ', req.session.superuser)
});

router.post('/login', async (req, res) => {
  const { login, password } = req.body;
  // console.log(req.body)
  const user = await User.findOne({ where: { login } });
  // req.session.superuser = login
  // console.log(user);
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

router.get('/loguot', logOut);

module.exports = router;
