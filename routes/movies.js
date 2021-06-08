const movieRouter = require('express').Router();
const { validateCreateMovie, validateObjectId } = require('../middlewares/validation');

const {
  getMovies,
  createMovies,
  deleteMovie,
} = require('../controllers/movies');

movieRouter.get('/', getMovies);
movieRouter.delete('/:_id', validateObjectId, deleteMovie);
movieRouter.post('/', validateCreateMovie, createMovies);

module.exports = movieRouter;
