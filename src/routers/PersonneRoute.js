
const express = require('express');

const PersonneController =   require('../controllers/PersonneController');
const personneRouter = express.Router()

personneRouter.route('/')
                    .get(PersonneController.getPersonnes)
                    .post(PersonneController.createPersonne)
                    .put(PersonneController.updatePersonne)
personneRouter.route('/:id')
                    .get(PersonneController.getPersonne)
                    .delete(PersonneController.deletePersonne)

module.exports = personneRouter