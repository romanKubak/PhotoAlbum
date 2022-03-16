exports.superUserName = (req, res, next) => {
  res.locals.superuser = req.session?.superuser;
  next();
  // console.log('res.locals ===> ', res.locals)
  // console.log('req.session', req.session);
};
