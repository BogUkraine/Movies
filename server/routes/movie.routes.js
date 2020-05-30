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

/**
 * @api {get} /api/movie/ get all movies
 * @apiName GetMovie
 * @apiGroup Movie
 *
 * @apiSuccess {String} message Movies were successfully got.
 * @apiSuccess {Object[]} movies movies
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "movies": [{
 *              "title": "Title",
 *              "releaseYear": "1999",
 *              "format": "DVD",
 *              "stars": ["star one", "star two"],
 *          }],
 *          "message": "Movies were successfully got"
 *     }  
 * @apiError SomethingWentWrong message Can not get movies.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500
 *     {
 *       "message": "Can not get movies"
 *       "error": "Some error"
 *     }
 */
router.get('/', controllers.getMovies);

/**
 * @api {get} /api/movie/:id get movie by id
 * @apiName GetMovie
 * @apiGroup Movie
 *
 * @apiParam {String} id movie we want to get.
 * 
 * @apiSuccess {String} message Movie was successfully got.
 * @apiSuccess {Object} movie movie
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "movie": {
 *              "title": "Title",
 *              "releaseYear": "1999",
 *              "format": "DVD",
 *              "stars": ["star one", "star two"],
 *          },
 *          "message": "Movies were successfully got"
 *     } 
 *  
 * @apiError SomethingWentWrong message Can not get movie.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500
 *     {
 *       "message": "Can not get movie"
 *       "error": "Some error"
 *     }
 */
router.get('/:id', controllers.getMovie);

/**
 * @api {get} /api/movie/:keyword get movie user was searching
 * @apiName GetMovie
 * @apiGroup Movie
 *
 * @apiParam {String} keyword word we are searching.
 * 
 * @apiSuccess {String} message Movies were successfully found.
 * @apiSuccess {Array} movies movies
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "movies": [{
 *              "title": "Title",
 *              "releaseYear": "1999",
 *              "format": "DVD",
 *              "stars": ["star one", "star two"],
 *          }],
 *          "message": "Movies were successfully got"
 *     } 
 *
 * @apiError SomethingWentWrong message Can not find movies.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500
 *     {
 *       "message": "Can not get movies"
 *       "error": "Some error"
 *     }
 */
router.get('/search/:keyword', controllers.searchMovies);

/**
 * @api {post} /api/movie/ post movie with form data
 * @apiName PostMovie
 * @apiGroup Movie
 * 
 * @apiParam {String} title movie title.
 * @apiParam {Number} releaseYear movie release year.
 * @apiParam {String="DVD","VHS","Blu-Ray"} format movie format.
 * @apiParam {String[]} stars movie stars.
 *
 * @apiParamExample {json} Request-Example:
 *   { 
 *      "title": "title",
 *      "releaseYear": "2000",
 *      "format": "DVD",
 *      "stars": ["star one", "star two"],
 *   }
 *
 * @apiSuccess {String} message Movie was successfully posted.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "message": "Movie was successfully posted"
 *     } 
 *
 * @apiError SomethingWentWrong message Can not post movies.
 * @apiError WrongTitle message "title" is not allowed to be empty.
 * @apiError WrongReleaseYear message "releaseYear" must be greater than 1900.
 * @apiError WrongReleaseYear message "releaseYear" must be less than 2021.
 * @apiError WrongFormat message "format" must be one of [DVD, VHS, Blu-Ray].
 * @apiError WrongStars message "stars" must be an array.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400
 *     {
 *       "message": "Can not post movie"
 *       "error": "Some error"
 *     }
 */
router.post('/', validation(joiSchemas.oneMovie, 'body'), controllers.postMovie);

/**
 * @api {delete} /api/movie/:id delete movie by id
 * @apiName DeleteMovie
 * @apiGroup Movie
 *
 * @apiSuccess {String} message Movie was successfully deleted
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "message": "Movie was successfully deleted"
 *     } 
 *
 * @apiError SomethingWentWrong message Can not delete movie.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       "message": "Can not delete movies"
 *       "error": "Some error"
 *     }
 */
router.delete('/:id', controllers.deleteMovie);

/**
 * @api {delete} /api/movie/ delete all movies
 * @apiName DeleteMovie
 * @apiGroup Movie
 *
 * @apiParam {String} id movie we want to delete. 
 * 
 * @apiSuccess {String} message Movies were successfully deleted
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "message": " Movies were successfully deleted"
 *     } 
 *
 * @apiError SomethingWentWrong message Can not delete movies.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       "message": "Can not delete movies"
 *       "error": "Some error"
 *     }
 */
router.delete('/', controllers.deleteMovies);

/**
 * @api {post} /api/movie/file/ post movies with txt file
 * @apiName PostMovie
 * @apiGroup Movie
 *
 * @apiParam {File} file txt file.
 * 
 * @apiSuccess {String} message Movies were successfully posted
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "message": "Movies were successfully posted"
 *     } 
 *
 * @apiError SomethingWentWrong message Can not post movies.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       "message": "Can not post movies"
 *       "error": "Some error"
 *     }
 */
router.post('/file',
    upload.single("filedata"),
    fileDelimiter,
    validation(joiSchemas.file, 'movies'),
    controllers.postFromFile
);

module.exports = router;