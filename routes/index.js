const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const { validateLogin, validateSignup } = require('../middlewares/validation');
const NotFoundError = require('../errors/not-found-error');
const { NOT_FOUND_ERR_MSG } = require('../utils/constants');

router.post('/signin', validateLogin, login);
router.post('/signup', validateSignup, createUser);

router.use(auth);
router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use(() => {
  throw new NotFoundError(NOT_FOUND_ERR_MSG);
});

module.exports = router;
