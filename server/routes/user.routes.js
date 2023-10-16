const exppress = require('express');

const userRouter = exppress.Router();

const userControllers = require('../controllers/user.controller');

// get all users
userRouter.get('/alluser', userControllers.getAllUser);

// get user by id;
userRouter.get("/:userId", userControllers.getUserById);

// create new user
userRouter.post('/register', userControllers.registerUser);

//login the user
userRouter.post('/login', userControllers.loginUser);

//reset the password
userRouter.patch('/resetpassword', userControllers.resetPassword);

module.exports=userRouter