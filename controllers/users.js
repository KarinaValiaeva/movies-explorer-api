const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFoundError = require('../errors/not-found-error');
const BadRequestError = require('../errors/bad-request');
const UnauthorizedError = require('../errors/unauthorized-error');
const ConflictingRequest = require('../errors/conflicting-request');
const {
  UNAUTHORIZED_ERR_MSG,
  SOLT_ROUNDS,
  MONGO_ERR_NAME,
  MONGO_ERR_CODE,
  CONFLICTING_REQUEST_MSG,
  VALIDATION_ERR_NAME,
  ERR_MSG,
  CAST_ERR_NAME,
  USER_NOT_FOUND,
} = require('../utils/constants');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );
      res.status(200).send({ token });
    })
    .catch(() => {
      throw new UnauthorizedError(UNAUTHORIZED_ERR_MSG);
    })
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  bcrypt
    .hash(req.body.password, SOLT_ROUNDS)
    .then((hash) => User.create({
      email: req.body.email,
      password: hash,
      name: req.body.name,
    }))
    .then((user) => res.send({
      name: user.name,
      email: user.email,
    }))
    .catch((err) => {
      if (err.name === MONGO_ERR_NAME && err.code === MONGO_ERR_CODE) {
        throw new ConflictingRequest(CONFLICTING_REQUEST_MSG);
      }
      if (err.name === VALIDATION_ERR_NAME) {
        throw new BadRequestError(ERR_MSG);
      } else {
        next(err);
      }
    })
    .catch(next);
};

module.exports.getUserInfo = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.send({
      name: user.name,
      email: user.email,
    }))
    .catch((err) => {
      if (err.name === CAST_ERR_NAME) {
        throw new BadRequestError(ERR_MSG);
      } else {
        throw new NotFoundError(USER_NOT_FOUND);
      }
    })
    .catch(next);
};

module.exports.updateUserProfile = (req, res, next) => {
  const { name, email } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => res.send({
      name: user.name,
      email: user.email,
    }))
    .catch((err) => {
      if (err.name === VALIDATION_ERR_NAME) {
        throw new BadRequestError(ERR_MSG);
      } else {
        throw new NotFoundError(USER_NOT_FOUND);
      }
    })
    .catch(next);
};
