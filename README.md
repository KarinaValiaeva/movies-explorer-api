# **Movies explorer (back-end)**

### Описание

API для сервиса Movies explorer.

Movies explorer - это сервис для поиска документальных фильмов по ключевым словам и длительности. Пользователю предлагается пройти регистрацию, после у него появляется возможность вопользоваться поиском фильмов и сохранением понравившихся, а также изменять информацию о себе в личном кабинете.

### Функционал

- Api выполняет функции аутентификации пользователей и сохранения фильмов.

##### В Api 5 роутов защищенных авторизацией 

``` 
GET /users/me - получение информации о пользователе (email и имя)

PATCH /users/me - обновление информации о пользователе (email и имя)

GET /movies - получение всех фильмов пользователя

POST /movies - создание фильма

DELETE /movies/movieId - удаление сохранённого фильма
```

##### Для реализации аутентификации и авторизации созданы два роута:
Роуты не защищены авторизацией.
```
POST /signup - создание пользователя c email, password и name

POST /signin - проверка данных и получение JWT
```

- Настроен rate limiter: число запросов с одного IP в единицу времени ограничено
- Используется модуль Helmet для установки заголовков, связанных с безопасностью.

### Технологический стек

- Node.js, Express, MongoDB, CORS.
- Выпущен SSL-сертификат

### Установка необходимого ПО

```
npm install
npm install nodemon -D
npm install express
npm install mongoose
npm install bcryptjs
npm install celebrate
npm install cors
npm install dotenv
npm install winston
npm install express-winston
npm install helmet
npm install jsonwebtoken
npm install validator
npm install express-rate-limit 
```

### Запуск проекта

Проект будет запущен на 3005 порту.

```
npm start
```

##### Запуск проекта в режине разработки 

```
npm run dev
```

### Сервер

[Ссылка на сервер](https://api.movies-explorer.nomoredomains.monster/)

ip-адрес сервера: 84.252.131.205

### Адрес проекта

https://movies-explorer.nomoredomains.monster

