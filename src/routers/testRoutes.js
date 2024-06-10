
const express = require('express'); 

const testFunction = require('../controllers/testController'); 
 
const testRouter = express.Router()

testRouter.route('/').get(testFunction)





module.exports = testRouter 

