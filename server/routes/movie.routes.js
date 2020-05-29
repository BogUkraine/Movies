const {Router} = require('express');
const router = Router();
const multer  = require('multer');
const controllers = require('../controllers/movie.controller');
const validation = require('../middlewares/validation.middleware');
const fileDelimiter = require('../middlewares/fileDelimiter.middleware');
const joiSchemas = require('../validation/movie.validation');

const upload = multer({
    dest:"server/uploads",
    fileFilter: (req, file, cb) => {
        file.mimetype === 'text/plain' ?
        cb(null, true) : cb(null, false)
    }
});
 
router.get('/', controllers.getMovies);
router.get('/:id', controllers.getMovie);
router.post('/', validation(joiSchemas.oneMovie, 'body'), controllers.postMovie);
router.delete('/:id', controllers.deleteMovie);
router.delete('/', controllers.deleteMovies);

router.post('/file',
    upload.single("filedata"),
    fileDelimiter,
    validation(joiSchemas.file, 'movies'),
    controllers.postFromFile);

module.exports = router;