var express = require('express');
var bodyParser = require('body-parser');
var cancionesControlador = require('./controladores/cancionesControlador');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//cuando se llama a la ruta /canciones, se ejecuta la acción buscarCanciones.
app.get('/canciones', cancionesControlador.buscarCanciones);
//cuando se llama a la ruta /canciones/id, se ejecuta la acción buscarCancion.
app.get('/canciones/:id', cancionesControlador.buscarCancion);

var puerto = '8080';

app.listen(puerto, function() {
    console.log("Escuchando pedidos en el puerto " + puerto);
});