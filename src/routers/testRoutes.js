const express = require('express');

// import { testFunction } from "../controllers/testController"

const testFunction = require('../controllers/testController');
const { createUser,deleteUser,getUser,getUsers,updateUser }= require('../controllers/UserController'); 
 
const router = express.Router()

router.route('/testFN').get(testFunction)


router.route('/users').get(getUsers)
router.route('/users/:id').get(getUser)
router.route('/users').post(createUser)
router.route('/users').put(updateUser)
router.route('/users/:id').delete(deleteUser)


module.exports = router 

