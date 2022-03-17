const router = require('express').Router();
const upload = require('../middleware/uploadAlbum')
console.log('upload ===> ', upload)
// Импортирую контролеры для работы роутеров
const { showAlbums, photoOnAlbum, create } = require('../controlers/albumsControler');

router.get('/', showAlbums);

router.get('/album/:id', photoOnAlbum);


router.post('/upload', upload, create);

module.exports = router;
