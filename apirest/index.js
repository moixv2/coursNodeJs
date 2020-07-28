// Ici nous appellons nos dépendances
let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let apiRoutes = require("./api-routes");
let app = express();

// Ici nous appellons BodyParser au sein
// de l'application
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// Ici nous nous connectons a la BDD
mongoose.connect('mongodb://localhost/apirest', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
var db = mongoose.connection;

if (!db)
	console.log("Error connecting to BDD");
else
	console.log("BDD connected succesfully");

// Ici nous appellons nos Routes
// (les chemins de l'api)
app.use('/api', apiRoutes);

app.get('/', function(req, res) {
	res.send("Hello World !");
});

app.listen(3000, () => {
	console.log("Server Running on port 3000");
});

