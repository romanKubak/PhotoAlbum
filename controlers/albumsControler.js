const { Album, User, Photo, Admission } = require('../db/models/');

async function showAlbums(req, res) {
  let authorAlbums;
  let allAlbums;
  // console.log('req.session.superuser ====>', req.session.superuser);
  if(req.session.superuser) {
    const author = await User.findOne({where: {login: req.session.superuser}});
    const idAuthor = author.dataValues.id;
    try {
      authorAlbums = await Album.findAll({where: {user_id: idAuthor}}, {order:[['id', 'DESC']]});
      // console.log('authorAlbums ===> ', authorAlbums)
      allAlbums = await Album.findAll({}, {order:[['id', 'DESC']]}); 
      allAlbums = allAlbums.filter(el => el.user_id !== idAuthor)
      // console.log('allAlbums ===> ', allAlbums)
    } catch (error) {
      res.render('error', { error: error.message });
    }
    return res.render('albums/index', { authorAlbums, allAlbums });
  } else {
    return res.render('albums/index');
  }
}

async function photoOnAlbum(req, res) {
  let allPhotos;
  let isAuthor;
  let authorAlbum
  // console.log('req.params.id ===> ', req.params.id)
  if(req.session.superuser) {
    try {
      allPhotos = await Photo.findAll({where: { album_id: req.params.id}})
      const thisAlbum = await Album.findOne({where: {id: req.params.id}})
      authorAlbum = await User.findOne({ where: {id: thisAlbum.user_id}});
      const superuser = await User.findOne({where: {login: req.session.superuser}})
      isAuthor = thisAlbum.user_id === superuser.id
      // console.log('\n\n isAuthor ======>', isAuthor)
      // console.log('\n\n thisAlbum ======>', thisAlbum)
      // console.log('\n\n authorAlbum ======>', authorAlbum)
    } catch {
      return res.render('error', {
      message: 'Не удалось получить запись из базы данных. Ошибка в ручке GET',
      error: {}
    });
    }
  return res.render('albums/photos', {allPhotos, isAuthor, authorAlbum})
  } else {
    res.render('users/login')
  }
}

module.exports = { showAlbums, photoOnAlbum }
