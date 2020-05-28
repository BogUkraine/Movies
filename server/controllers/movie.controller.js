const Movie = require('../models/Movie');
const fs = require('fs');

exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.status(200).send({
            message: 'Movies were successfully got',
            movies,
        });
    } catch(error) {
        return res.status(500).send({message: 'Can not get movies', error});
    }
}

exports.getMovie = async (req, res) => {
    try {
        const {movieId} = req.query.id;
        const movie = await Movie.findById(movieId);
        return res.status(200).send({message: 'Movie was successfully got', movie});
    } catch(error) {
        return res.status(500).send({message: 'Can not get movie', error});
    }
}

exports.postMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        return res.status(200).send({message: 'Movie was successfully added', movie});
    } catch(error) {
        return res.status(500).send({message: error._message || 'Can not post movie' });
    }
}

exports.postFromFile = async (req, res) => {
    try {
        return res.status(200).send({message: 'Movies were successfully got', movie});
    } catch(error) {
        return res.status(500).send({message: 'Can not get movies', error});
    }
}

exports.deleteMovie = async (req, res) => {
    try {
        const movieId = req.params.id;
        await Movie.findByIdAndDelete(movieId);
        return res.status(200).send({message: 'Movie was successfully deleted'});
    } catch(error) {
        return res.status(500).send({message: 'Can not delete movie', error});
    }
}

//regex = new RegExp(escapeRegex(req.query.search), 'gi');