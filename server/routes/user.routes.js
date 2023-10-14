const exppress = require('express');

const userRouter = exppress.Router();

const userControllers = require('../controllers/user.controller');

// get all users
userRouter.get('/alluser', userControllers.getAllUser);

// get user by id;
userRouter.get("/:userId", userControllers.getUserById);

// create new user
userControllers.post('/register', userControllers.registerUser);

//login the user
userControllers.post('/login', userControllers.loginUser);

//reset the password
userControllers.patch('/resetpassword', userControllers.resetPassword);
