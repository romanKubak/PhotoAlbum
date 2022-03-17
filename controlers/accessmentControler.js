const { Album, User, Photo, Admission } = require('../db/models/');

async function showaccessAlbumId(req, res) {
  let accessAlbum;
  let authorAlbums;
  if (req.session.superuser) {
    const author = await User.findOne({ where: { login: req.session.superuser } });
    const idAuthor = author.dataValues.id;
    const allAdmission = await Admission.findAll()
    authorAlbums = await Album.findAll({ where: { user_id: idAuthor } }, { order: [['id', 'DESC']] });
    console.log(allAdmission);
    if (allAdmission.length != 0) {
      const accessId = await Admission.findOne({ where: { user_id: idAuthor } })
      const accessAlbumId = accessId.dataValues.album_id
      try {
        // authorAlbums = await Album.findAll({ where: { user_id: idAuthor } }, { order: [['id', 'DESC']] });
        accessAlbum = await Album.findAll({ where: { id: accessAlbumId } })
      } catch (error) {
        res.render('error', { error: error.message });
      }
      return res.render('albums/index', { accessId, accessAlbumId, accessAlbum, authorAlbums });
    } else {
      return res.render('albums/index', {authorAlbums})
    }
  } else {
    return res.render('albums/index');
  }
}

module.exports = { showaccessAlbumId }
