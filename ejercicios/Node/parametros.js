var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//query params
app.get('/saludar', function(req, res) {
var nombre = req.query.nombre;    
    res.send('Hola '+ nombre);
});

//path params
app.get('/saludar/:nombre', function(req, res) {
var nombre = req.params.nombre;    
    res.send('Hola '+ nombre);
});

var puerto = '8080';

app.listen(puerto, function() {
    console.log("Escuchando pedidos en el puerto " + puerto);
});