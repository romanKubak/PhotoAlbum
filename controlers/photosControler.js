const { Album, User, Photo, Admission } = require('../db/models/');

async function create(req,res) {
  // console.log('\n req.session.superuser ===>\n', req.session.superuser)
  const author = await User.findOne({where: {login: req.session.superuser}})
  // console.log('\n req.files[0].path ===>\n', req.files[0].path)
  // console.log('req.params ===>', req.params)
  const album = await Album.findOne({where: {id: req.params.id}})
  console.log('album ===>', album)
  let path = req.files[0].path
  path = path.slice(6,path.length)

  const newPhoto = new Photo({
    title: req.body.title,
    body: req.body.body,
    photo: req.files ? path : '',
    album_id: album.id
  })

  try{
    await newPhoto.save();
    res.redirect(`/album/${album.id}`)
  } catch {
    console.log(error)
  } 
}

module.exports = { create }
