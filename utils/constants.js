const VALIDATION_ERR_NAME = 'ValidationError';
const CAST_ERR_NAME = 'CastError';
const MONGO_ERR_NAME = 'MongoError';
const MONGO_ERR_CODE = 11000;
const ERR_MSG = 'Переданы некорректные данные';
const MOVIE_NOT_FOUND = 'Запрашиваемый фильм не найден';
const USER_NOT_FOUND = 'Запрашиваемый пользователь не найден';
const NOT_FOUND_ERR_MSG = 'Ресурс не найден';
const FORBIDDEN_ERR_MSG_MOVIE = 'Нет прав для удаления данного фильма';
const UNAUTHORIZED_ERR_MSG = 'Неправильные почта или пароль';
const CONFLICTING_REQUEST_MSG = 'Пользователь с переданным email уже существует';
const AUTH_ERR_MSG = 'Необходима авторизация';
const INTERNET_SERVER_ERR_MSG = 'На сервере произошла ошибка';
const VALIDATION_URL_MSG = 'Невалидная ссылка';
const VALIDATION_EMAIL_MSG = 'Поле email должно быть валидным';
const REQUIRED_MSG_EMAIL = 'Поле email является обязательным';
const VALIDATION_PASS_MSG = 'Минимальная длина поля password 8';
const REQUIRED_MSG_PASS = 'Поле password является обязательным';
const VALIDATON_NAME_MIN_MSG = 'Минимальная длина поля name 2';
const VALIDATON_NAME_MAX_MSG = 'Максимальна длина поля name 30';
const REQUIRED_MSG_NAME = 'Поле name является обязательным';
const REQUIRED_MSG_COUNTRY = 'Поле country является обязательным';
const REQUIRED_MSG_DIRECTOR = 'Поле director является обязательным';
const REQUIRED_MSG_DURATION = 'Поле duration является обязательным';
const REQUIRED_MSG_YEAR = 'Поле year является обязательным';
const REQUIRED_MSG_DESCRIPTION = 'Поле description является обязательным';
const REQUIRED_MSG_IMAGE = 'Поле image является обязательным';
const REQUIRED_MSG_TRAILER = 'Поле trailer является обязательным';
const REQUIRED_MSG_THUMBNAIL = 'Поле thumbnail является обязательным';
const VALIDATON_NAME_RU_MIN_MSG = 'Минимальная длина поля nameRU 2';
const VALIDATON_NAME_RU_MAX_MSG = 'Максимальна длина поля nameRU 30';
const VALIDATON_NAME_EN_MIN_MSG = 'Минимальная длина поля nameEN 2';
const VALIDATON_NAME_EN_MAX_MSG = 'Максимальна длина поля nameEN 30';
const REQUIRED_MSG_NAME_RU = 'Поле nameRU является обязательным';
const REQUIRED_MSG_NAME_EN = 'Поле nameEN является обязательным';
const REQUIRED_MSG_MOVIE_ID = 'Поле movieId является обязательным';
const VALIDATION_ID_MSG = 'Длина поля _id должна быть 24 символа';

const SOLT_ROUNDS = 10;

module.exports = {
  VALIDATION_ERR_NAME,
  CAST_ERR_NAME,
  ERR_MSG,
  NOT_FOUND_ERR_MSG,
  MOVIE_NOT_FOUND,
  FORBIDDEN_ERR_MSG_MOVIE,
  UNAUTHORIZED_ERR_MSG,
  SOLT_ROUNDS,
  MONGO_ERR_NAME,
  MONGO_ERR_CODE,
  CONFLICTING_REQUEST_MSG,
  USER_NOT_FOUND,
  AUTH_ERR_MSG,
  INTERNET_SERVER_ERR_MSG,
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
  VALIDATON_NAME_EN_MIN_MSG,
  VALIDATON_NAME_EN_MAX_MSG,
  VALIDATON_NAME_RU_MIN_MSG,
  VALIDATON_NAME_RU_MAX_MSG,
  REQUIRED_MSG_NAME_RU,
  REQUIRED_MSG_NAME_EN,
  REQUIRED_MSG_MOVIE_ID,
  VALIDATION_ID_MSG,
};
