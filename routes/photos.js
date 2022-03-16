// const router = require('express').Router();
// // const { Album, User, Photo, Admission } = require('../db/models/');


// router.get('/photo', async (req, res) => {
//   let allPhoto;
//   // const idAlbum = ???; //Будем получать через fetch?
//   // console.log(author)
//   try {
//     // allPhoto = await Photo.findAll({where: { album_id: idAlbum }}, {order:[['id', 'DESC']]}); 
//     allPhoto = await Photo.findAll({where: { album_id: 1 }}, {order:[['id', 'DESC']]}); 
//   } catch (error) {
//     return res.render('error', {
//       message: 'Не удалось получить записи из базы данных.',
//       error: {}
//     });
//   }
//   return res.render('albums/photos', { allPhoto });
// });

// module.exports = router;
