const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const UnauthorizedError = require('../errors/unauthorized-error');
const { VALIDATION_EMAIL_MSG, UNAUTHORIZED_ERR_MSG } = require('../utils/constants');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v) => validator.isEmail(v),
        message: VALIDATION_EMAIL_MSG,
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
  },
  { versionKey: false },
);

userSchema.statics.findUserByCredentials = function func(email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError(UNAUTHORIZED_ERR_MSG);
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          throw new UnauthorizedError(UNAUTHORIZED_ERR_MSG);
        }
        return user;
      });
    });
};

module.exports = mongoose.model('user', userSchema);
