const router = require('express').Router();
const multer = require('multer');

const { Album, User, Photo, Admission } = require('../db/models/');

const upload = multer({ dest: 'public/photo/uploads'})



module.exports = router;
