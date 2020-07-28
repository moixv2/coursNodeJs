// usersController.js
Users = require('./usersModel');

// Globalement, on crée une fonction GET de nos
// données, dans ce cas, ma table Users
// (C'est l'équivalent d'une requete SELECT *)
exports.index = function (req, res) {
	Users.find(function (err, users) {
		if (err) {
			res.json({
				status: "Error getting users",
				message: err,
			});
		}
		res.json({
			status: "Success getting users",
			data: users
		});
	});
};

// Ici, nous allons crée la fonction qui nous permet
// de créer de nouvelles données
exports.new = function(req, res) {
	// Nous utilisons le modèle de Users pour la
	// création de nouvelles données
	let user = new Users();
	// Ici globalement nous récupérons les données
	user.nom = req.body.nom;
	user.prenom = req.body.prenom;
	user.email = req.body.email;
	user.password = req.body.password;

	// Une fois les données récupérées, nous allons
	// les sauvegarder dans notre BDD
	// (C'est l'équivalent d'une requete SQL INSERT)
	user.save(function(err) {
		if (err)
			res.json(err)

		res.json({
			message: 'Nouvel utilisateur crée',
			data: user
		});
	});
};

// Ici nous allons créer la fonction d'update
// de mes users
// (C'est l'équivalent d'une requete UPDATE)
exports.update = function(req, res) {
	// Ici il faut localiser l'user d'abord grace a son ID
	Users.findById(req.params.user_id, function(err, user) {
		// En cas d'erreur nous renvoyons celle ci
		if (err)
			res.send(err);

		// Ici nous allons récupérer les données a modifier
		user.nom = req.body.nom;
		user.prenom = req.body.prenom;
		user.email = req.body.email;
		user.password = req.body.password;

		// Ensuite nous allons sauvegarder notre donnée dans la BDD
		user.save(function(err) {
			if (err)
				res.json(err)

			res.json({
				message: 'Utilisateur correctement modifié !',
				data: user
			});
		});
	});
};

// Ici nous allons créer la fonctionnalité de suppression
// de mes données
// (Encore une fois, ça équivaut a une requete DELETE)
exports.delete = function(req, res) {
	Users.remove({
		_id: req.params.user_id
	}, function(err, user) {
		if (err)
			res.send(err);

		res.json({
			message: "Utilisateur supprimé"
		});
	});
};

// Cette fonctionnalité nous permettra de visualiser UNE donnée
// a la fois
// (Ca équivaut a une requete SELECT ... WHERE ID = )
exports.view = function (req, res) {
	Users.findById(req.params.user_id, function(err, user) {
		if (err)
			res.send(err);

		res.json({
			message: "Utilisateur trouvé",
			data: user
		});
	});
};

