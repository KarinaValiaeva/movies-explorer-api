const userRouter = require('express').Router();
const { validateUpdateUser, validateObjectId } = require('../middlewares/validation');

const {
  getUserInfo,
  updateUserProfile,
} = require('../controllers/users');

userRouter.get('/me', validateObjectId, getUserInfo);
userRouter.patch('/me', validateUpdateUser, updateUserProfile);

module.exports = userRouter;
