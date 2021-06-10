const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
    },
    director: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      validate: {
        validator(v) {
          return validator.isURL(v, {
            protocols: ['http', 'https', 'ftp'],
            require_tld: true,
            require_protocol: true,
          });
        },
      },
    },
    trailer: {
      type: String,
      required: true,
      validate: {
        validator(v) {
          return validator.isURL(v, {
            protocols: ['http', 'https', 'ftp'],
            require_tld: true,
            require_protocol: true,
          });
        },
      },
    },
    thumbnail: {
      type: String,
      required: true,
      validate: {
        validator(v) {
          return validator.isURL(v, {
            protocols: ['http', 'https', 'ftp'],
            require_tld: true,
            require_protocol: true,
          });
        },
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    movieId: {
      type: Number,
      required: true,
    },
    nameRU: {
      type: String,
      required: true,
    },
    nameEN: {
      type: String,
      required: true,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('movie', movieSchema);
