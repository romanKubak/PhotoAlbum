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
  let authorAlbum;
  let thisAlbum;
  // console.log('req.params.id ===> ', req.params.id)
  if(req.session.superuser) {
    try {
      allPhotos = await Photo.findAll({where: { album_id: req.params.id}, order:[['id', 'DESC']]})
      thisAlbum = await Album.findOne({where: {id: req.params.id}})
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
  return res.render('albums/photos', {allPhotos, isAuthor, authorAlbum, thisAlbum})
  } else {
    res.render('users/login')
  }
}

async function create(req,res) {
  // console.log('\n req.session.superuser ===>\n', req.session.superuser)
  const author = await User.findOne({where: {login: req.session.superuser}})
  // console.log('\n req.files[0].path ===>\n', req.files[0].path)
  let path = req.files[0].path
  path = path.slice(6,path.length)
  const newAlbum = new Album({
    title: req.body.title,
    body: req.body.body,
    photo: req.files ? path : '',
    user_id: author.id
  })
  try{
    await newAlbum.save();
    res.redirect('/')
  } catch {
    console.log(error)
  } 
}
async function showMyAlbums(req, res) {
  let authorAlbums;
  // console.log('req.session.superuser ====>', req.session.superuser);
  if(req.session.superuser) {
    const author = await User.findOne({where: {login: req.session.superuser}});
    const idAuthor = author.dataValues.id;
    try {
      authorAlbums = await Album.findAll({where: {user_id: idAuthor}}, {order:[['id', 'DESC']]});
    } catch (error) {
      res.render('error', { error: error.message });
    }
    return res.render('albums/myAlbums', { authorAlbums });
  } else {
    return res.render('albums/index');
  }
}

module.exports = { showAlbums, photoOnAlbum, create, showMyAlbums }
