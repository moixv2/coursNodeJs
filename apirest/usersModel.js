// usersModel.js
const mongoose = require('mongoose');

// Nous allons créer le "SCHEMA" de données de 
// ma table utilisateurs
// Par ex: "nom", "prenom", "email", "password"
const userSchema = mongoose.Schema({
	nom : {
		type: String,
		required: true
	},
	prenom : String,
	email : {
		type: String,
		required: true
	},
	password : {
		type: String,
		required: true
	},
	createDate : {
		type: Date,
		default: Date.now
	}
});

// Ensuite, nous exportons cette table sous forme 
// "modèle" :
var User = module.exports = mongoose.model('users', userSchema);
