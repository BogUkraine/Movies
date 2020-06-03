const Movie = require('../models/Movie');

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).send({
      message: 'Movies were successfully got',
      movies,
    });
  } catch (error) {
    return res.status(500).send({ message: 'Can not get movies', error });
  }
};

exports.getMovie = async (req, res) => {
  try {
    const { movieId } = req.params.id;
    const movie = await Movie.findById(movieId);
    return res.status(200).send({ message: 'Movie was successfully got', movie });
  } catch (error) {
    return res.status(500).send({ message: 'Can not get movie', error });
  }
};

exports.postMovie = async (req, res) => {
  try {
    const doesMovieExist = await Movie.findOne(req.body);
    if (doesMovieExist) {
      return res.status(500).send({ message: 'This movie already exists' });
    }

    const movie = await Movie.create(req.body);
    return res.status(200).send({ message: 'Movie was successfully added', movie });
  } catch (error) {
    return res.status(500).send({ message: error.message || 'Can not post movie' });
  }
};

exports.postFromFile = async (req, res) => {
  try {
    // const uniqueMovies = [];
    // let movie = null;
    // req.movies.forEach((item, index) => {
    //   movie = await Movie.find(item);
    //   if(!movie) {
    //     uniqueMovies.push(movie);
    //   }
    //   movie = null;
    // })

    // const uniqueMovies = [];
    // let movie = null;
    // for (const item of req.movies) {
    //   movie = await Movie.find(item);
    //   if(!movie) {
    //     uniqueMovies.push(movie);
    //   }
    //   movie = null;
    // }
    await Movie.insertMany(req.movies);
    return res.status(200).send({ message: 'Movies were successfully posted' });
  } catch (error) {
    return res.status(500).send({ message: 'Can not post movies', error });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    await Movie.findByIdAndDelete(movieId);
    return res.status(200).send({ message: 'Movie was successfully deleted' });
  } catch (error) {
    return res.status(500).send({ message: 'Can not delete movie', error });
  }
};

exports.deleteMovies = async (req, res) => {
  try {
    await Movie.deleteMany();
    return res.status(200).send({ message: 'Movies were successfully deleted' });
  } catch (error) {
    return res.status(500).send({ message: 'Can not delete movies', error });
  }
};

exports.searchMovies = async (req, res) => {
  try {
    const { keyword } = req.params;
    const regex = { $regex: keyword, $options: 'gi' };

    const dataFromMovies = await Movie.find({ title: regex });
    const dataFromActors = await Movie.find({
      stars: { $elemMatch: regex },
    });
    const togetherArray = [...dataFromActors, ...dataFromMovies];

    const setHepler = [...new Set(togetherArray.map((item) => JSON.stringify(item)))];
    const movies = setHepler.map((item) => JSON.parse(item));

    return res.status(200).send({
      message: 'Movies were successfully found',
      movies,
    });
  } catch (error) {
    return res.status(500).send({ message: 'Can not find movies', error });
  }
};
