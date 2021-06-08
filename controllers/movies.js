const Movie = require('../models/movie');
const BadRequestError = require('../errors/bad-request');
const NotFoundError = require('../errors/not-found-error');
const ForbiddenError = require('../errors/forbidden-error');
const {
  VALIDATION_ERR_NAME, CAST_ERR_NAME, ERR_MSG, MOVIE_NOT_FOUND, FORBIDDEN_ERR_MSG_MOVIE,
} = require('../utils/constants');

module.exports.getMovies = (req, res, next) => {
  const owner = req.user._id;
  Movie.find({ owner })
    .then((movies) => res.send(movies))
    .catch(next);
};

module.exports.createMovies = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    nameRU,
    nameEN,
    movieId,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    nameRU,
    nameEN,
    owner: req.user._id,
    movieId,
  })
    .then((movie) => res.send({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movie.image,
      trailer: movie.trailer,
      thumbnail: movie.thumbnail,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      movieId: movie.movieId,
    }))
    .catch((err) => {
      if (err.name === VALIDATION_ERR_NAME) {
        throw new BadRequestError(ERR_MSG);
      } else {
        next(err);
      }
    })
    .catch(next);
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params._id)
    .orFail(() => {
      throw new NotFoundError(MOVIE_NOT_FOUND);
    })
    .then((movie) => {
      if (!movie.owner.equals(req.user._id)) {
        throw new ForbiddenError(FORBIDDEN_ERR_MSG_MOVIE);
      } else {
        return movie.remove()
          .then((movieUser) => {
            res.send({
              country: movieUser.country,
              director: movieUser.director,
              duration: movieUser.duration,
              year: movieUser.year,
              description: movieUser.description,
              image: movieUser.image,
              trailer: movieUser.trailer,
              thumbnail: movieUser.thumbnail,
              nameRU: movieUser.nameRU,
              nameEN: movieUser.nameEN,
              movieId: movieUser.movieId,
            });
          });
      }
    })
    .catch((err) => {
      if (err.name === CAST_ERR_NAME) {
        throw new BadRequestError(ERR_MSG);
      } else {
        next(err);
      }
    })
    .catch(next);
};
