const router = require('express').Router();
// const { Album, User, Photo, Admission } = require('../db/models/');

router.get('/', async (req, res) => {
  let authorAlbums;
  let allAlbums;
  const author = await User.findOne({where: {userName: req.session.superuser}});
  const idAuthor = author.dataValues.id;
  // console.log(author)
  try {
    authorAlbums = await Album.findAll({where: {user_id: idAuthor}}, {order:[['id', 'DESC']]});
    // проверить работоспособность !idAuthor
    allAlbums = await Album.findAll({where: { user_id: !idAuthor }}, {order:[['id', 'DESC']]}); 
  } catch (error) {
    return res.render('error', {
      message: 'Не удалось получить записи из базы данных.',
      error: {}
    });
  }
  // // console.log('entries Router', entries)
  return res.render('albums/index', { authorAlbums, allAlbums });
});

module.exports = router;
