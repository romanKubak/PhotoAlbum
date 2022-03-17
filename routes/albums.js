const router = require('express').Router();
const upload = require('../middleware/uploadAlbum')
console.log('upload ===> ', upload)
// Импортирую контролеры для работы роутеров
const { showAlbums, photoOnAlbum, create, showMyAlbums, addAdmission } = require('../controlers/albumsControler');
const {showaccessAlbumId} = require('../controlers/accessmentControler')

router.get('/', showaccessAlbumId);

router.get('/album/:id', photoOnAlbum);

router.get('/myPost', showMyAlbums);

router.post('/upload', upload, create);

router.post('/addAdmission', addAdmission)

module.exports = router;
