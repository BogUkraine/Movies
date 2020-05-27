const {Router} = require('express');
const router = Router();
const controllers = require('../controllers/movie.controller');
const validation = require('../middlewares/validation.middleware');
const joiSchemas = require('../validation/movie.validation');

router.get('/', controllers.getMovies);
router.get('/:id', controllers.getMovie);
router.post('/', validation(joiSchemas.oneMovie, 'body'), controllers.postMovie);
router.delete('/:id', controllers.deleteMovie);


// later
router.post('/file', controllers.postFromFile);

module.exports = router;