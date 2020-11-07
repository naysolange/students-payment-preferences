var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8080;

// Convierte una petición recibida a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/isAlive', function(req, res){
	res.status(200).send({
		message: 'I am alive! =D'
	});
});

app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}`);
	console.log('Defined endpoints:');
	console.log(`	[GET] http://localhost:${port}/isAlive`);
});