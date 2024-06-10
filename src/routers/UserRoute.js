
const express = require('express');

const UserController = require('../controllers/UserController'); 
const userRouter = express.Router()

userRouter.route('/')       .get(UserController.getUsers)
                            .post(UserController.createUser)
                            .put(UserController.updateUser)

userRouter.route('/:id')
                                .get(UserController.getUser)
                                .delete(UserController.deleteUser)
 


module.exports = userRouter