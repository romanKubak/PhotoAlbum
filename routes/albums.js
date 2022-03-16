const router = require('express').Router();

// Импортирую контролеры для работы роутеров
const { showAlbums, photoOnAlbum } = require('../controlers/albumsControler');

router.get('/', showAlbums);

router.get('/album/:id', photoOnAlbum);

module.exports = router;
