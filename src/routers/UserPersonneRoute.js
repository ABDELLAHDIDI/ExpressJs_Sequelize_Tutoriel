
const express = require('express');

const UserPersonneController  = require('../controllers/UserPersonneController'); 
const userpersonneRouter = express.Router()

                                
userpersonneRouter.route('/setFK') 
                            .post(UserPersonneController.setFk)
userpersonneRouter.route('setfk/:name') 
                            .post(UserPersonneController.setfk)
userpersonneRouter.route('/set_fk') 
                            .post(UserPersonneController.set_fk)
userpersonneRouter.route('/:id') 
                            .get(UserPersonneController.countUsers)
                            .delete(UserPersonneController.removeUsers)


module.exports = userpersonneRouter