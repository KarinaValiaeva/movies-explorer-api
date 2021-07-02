const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
const {
  VALIDATION_URL_MSG,
  VALIDATION_EMAIL_MSG,
  REQUIRED_MSG_EMAIL,
  VALIDATION_PASS_MSG,
  REQUIRED_MSG_PASS,
  VALIDATON_NAME_MIN_MSG,
  VALIDATON_NAME_MAX_MSG,
  REQUIRED_MSG_NAME,
  REQUIRED_MSG_COUNTRY,
  REQUIRED_MSG_DIRECTOR,
  REQUIRED_MSG_DURATION,
  REQUIRED_MSG_YEAR,
  REQUIRED_MSG_DESCRIPTION,
  REQUIRED_MSG_IMAGE,
  REQUIRED_MSG_TRAILER,
  REQUIRED_MSG_THUMBNAIL,
  VALIDATON_NAME_RU_MIN_MSG,
  VALIDATON_NAME_RU_MAX_MSG,
  VALIDATON_NAME_EN_MIN_MSG,
  VALIDATON_NAME_EN_MAX_MSG,
  REQUIRED_MSG_NAME_RU,
  REQUIRED_MSG_NAME_EN,
  REQUIRED_MSG_MOVIE_ID,
  VALIDATION_ID_MSG,
} = require('../utils/constants');

const validateUrl = (value, helpers) => {
  if (
    validator.isURL(value, {
      protocols: ['http', 'https', 'ftp'],
      require_tld: true,
      require_protocol: true,
    })
  ) {
    return value;
  }
  return helpers.message(VALIDATION_URL_MSG);
};

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .required()
      .email()
      .message(VALIDATION_EMAIL_MSG)
      .messages({
        'any.required': REQUIRED_MSG_EMAIL,
      }),
    password: Joi.string().required().min(8).messages({
      'string.min': VALIDATION_PASS_MSG,
      'any.required': REQUIRED_MSG_PASS,
    }),
  }),
});

const validateSignup = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .required()
      .email()
      .message(VALIDATION_EMAIL_MSG)
      .messages({
        'any.required': REQUIRED_MSG_EMAIL,
      }),
    password: Joi.string().required().min(8).messages({
      'string.min': VALIDATION_PASS_MSG,
      'any.required': REQUIRED_MSG_PASS,
    }),
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.min': VALIDATON_NAME_MIN_MSG,
        'string.max': VALIDATON_NAME_MAX_MSG,
        'any.required': REQUIRED_MSG_NAME,
      }),
  }),
});

const validateUpdateUser = celebrate({
  body: Joi.object()
    .keys({
      name: Joi.string().required().min(2).max(30)
        .messages({
          'string.min': VALIDATON_NAME_MIN_MSG,
          'string.max': VALIDATON_NAME_MAX_MSG,
          'any.required': REQUIRED_MSG_NAME,
        }),
      email: Joi.string()
        .required()
        .email()
        .message(VALIDATION_EMAIL_MSG)
        .messages({
          'any.required': REQUIRED_MSG_EMAIL,
        }),
    })
    .unknown(true),
});

const validateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().messages({
      'any.required': REQUIRED_MSG_COUNTRY,
    }),
    director: Joi.string().required().messages({
      'any.required': REQUIRED_MSG_DIRECTOR,
    }),
    duration: Joi.number().required().messages({
      'any.required': REQUIRED_MSG_DURATION,
    }),
    year: Joi.number().required().messages({
      'any.required': REQUIRED_MSG_YEAR,
    }),
    description: Joi.string().required().messages({
      'any.required': REQUIRED_MSG_DESCRIPTION,
    }),
    image: Joi.string()
      .required()
      .custom(validateUrl)
      .messages({
        'any.required': REQUIRED_MSG_IMAGE,
      }),
    trailer: Joi.string()
      .required()
      .custom(validateUrl)
      .messages({
        'any.required': REQUIRED_MSG_TRAILER,
      }),
    thumbnail: Joi.string()
      .required()
      .custom(validateUrl)
      .messages({
        'any.required': REQUIRED_MSG_THUMBNAIL,
      }),
    nameRU: Joi.string().required().min(2)
      .messages({
        'string.min': VALIDATON_NAME_RU_MIN_MSG,
        'any.required': REQUIRED_MSG_NAME_RU,
      }),
    nameEN: Joi.string().required().min(2)
      .messages({
        'string.min': VALIDATON_NAME_EN_MIN_MSG,
        'any.required': REQUIRED_MSG_NAME_EN,
      }),
    movieId: Joi.number().required().messages({
      'any.required': REQUIRED_MSG_MOVIE_ID,
    }),
  }),
});

const validateObjectId = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().hex().length(24)
      .message(VALIDATION_ID_MSG),
  }),
});

module.exports = {
  validateLogin,
  validateSignup,
  validateUpdateUser,
  validateCreateMovie,
  validateObjectId,
};
