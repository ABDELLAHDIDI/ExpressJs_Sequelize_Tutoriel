
const express = require('express');

const addProducts  = require('../controllers/ProductUserController'); 
const productuserRouter = express.Router()

                                
productuserRouter.route('/') 
                            .post(addProducts) 


module.exports = productuserRouter