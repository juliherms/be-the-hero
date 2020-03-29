const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

//responsible to login application
routes.post('/sessions',sessionController.create);
//list ongs in database
routes.get('/ongs',ongController.index);
//Responsible to create ong
routes.post('/ongs',ongController.create);
//Responsible to create incident
routes.post('/incidents',incidentController.create);
//Responsible to list incident
routes.get('/incidents',incidentController.index);
//Responsible to delete incident
routes.delete('/incidents/:id',incidentController.delete);
//Responsible to list incidents with ong profile
routes.get('/profile',profileController.index);

module.exports = routes;