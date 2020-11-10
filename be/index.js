var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;
const students = require("./controller/student.controller.js");
var cors = require('cors')

// Convierte una petición recibida a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


app.get('/isAlive', function(req, res){
	res.status(200).send({
		message: 'I am alive! =D'
	});
});

app.get('/students', students.findAll);

app.post('/student', students.create);



app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}`);
	console.log('Defined endpoints:');
	console.log(`	[GET] http://localhost:${port}/isAlive`);
	console.log(`	[GET] http://localhost:${port}/students`);
});