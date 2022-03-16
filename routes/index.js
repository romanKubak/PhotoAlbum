const router = require('express').Router();

router.get('/', (req, res) => {
  res.redirect('albums/index');
});

module.exports = router;
