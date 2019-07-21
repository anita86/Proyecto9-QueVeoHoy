var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var comidas = ["Carne", "Pollo", "Fideos", "Pizza", "Hamburguesa", "Helado", "Pescado", "Ensalada"];

//query params
app.get('/palabras', function(req, res) {
var palabra = req.query.palabra;
    var cantidad = req.query.cantidad;

    //si no fue enviado el parametro cantidad, la variable va a estar vacÃ­a. Si lo esta, se define
    //que la cantidad va a ser 5.
    if (!cantidad)
        var cantidad = 5;

    //se crea un array
    var array = [];
    //se inserta en cada posiciÃ³n del array, la palabra que fue enviada
    for (i = 0; i < cantidad; i++) {
        array[i] = palabra;
    }      
    res.send(array);
});

//path params
app.get('/comidas/:posicion', function(req, res) {
var posicion = req.params.posicion;    
//se almacena en la variable respuesta la posiciÃ³n correspondiente del array
    var respuesta = comidas[posicion];

    //si la posiciÃ³n del array no existe, la variable respuesta va a estar vacÃ­a. Si lo esta, la respuesta
    //va a ser el mensaje de error 
    if (!respuesta)
        respuesta = "No existe esa comida";

    //se envÃ­a la respuesta
    res.send(respuesta);
});

var puerto = '8080';


app.listen(puerto, function() {
    console.log("Escuchando pedidos en el puerto " + puerto);
});