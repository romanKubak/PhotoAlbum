const router = require('express').Router();
const { Album, User, Photo, Admission } = require('../db/models/');

router.get('/', async (req, res) => {
  let authorAlbums;
  let allAlbums;
  const author = await User.findOne({where: {login: req.session.superuser}});
  // console.log('author ===> ', author)
  // const author = await User.findOne({where: {login: 'Loh'}});

  const idAuthor = author.dataValues.id;
  // console.log(author)
  try {
    authorAlbums = await Album.findAll({where: {user_id: idAuthor}}, {order:[['id', 'DESC']]});
    console.log('authorAlbums ===> ', authorAlbums)
    // проверить работоспособность !idAuthor
    // allAlbums = await Album.findAll({where: { user_id: !idAuthor }}, {order:[['id', 'DESC']]}); 
  } catch (error) {
    res.render('error', { error: error.message });
  }
  // // console.log('entries Router', entries)
  res.render('albums/index', { authorAlbums, allAlbums });
});

module.exports = router;
