const router = require('express').Router();
const upload = require('../middleware/uploadPhoto');
const { create } = require('../controlers/photosControler');

// const { Album, User, Photo, Admission } = require('../db/models/');

router.post('/uploadPhoto/:id', upload, create);

module.exports = router;
