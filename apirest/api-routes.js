// Nous appellons le Router fournis par Express
let router = require('express').Router();
// Configurer une réponse par défaut de l'api
router.get('/', function (req, res) {
	res.json({
		status : 'API is working!',
		message: 'Bienvenu a mon API Restful !'
	});
});

// Nous allons récupérer le Controlleur
var userController = require('./usersController');

// Nous allons définir les différentes ROUTES de notre API
// Aussi appelé 'endpoint', l'URL sur laquelle faire nos 
// requetes
router.route('/users/')
	.get(userController.index)
	.post(userController.new);

router.route('/users/:user_id')
	.get(userController.view)
	.put(userController.update)
	.delete(userController.delete);
// Exporter le "module" router afin de pouvoir
// y accéder ailleurs que dans ce fichier
module.exports = router;
//api-routes.js