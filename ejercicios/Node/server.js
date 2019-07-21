
//importo dependencia express
var express = require('express');
// importo dependencia body parser con npm
var bodyParser = require('body-parser');

//creo referencia a este dependencia express
var app = express();

//esto sirve para parsear los atributos que son mandados en una url
app.use(bodyParser.urlencoded({
    extended: true
}));

//para que pedidos y respuestas puedan estar en formato json
app.use(bodyParser.json());

/*PARTE EN QUE DEFINIMOS UNA RUTA Y CUAL ES LA ACCION QUE VA A 
// REALIZARSE CUANDO SE LE HAGA UN PEDIDO A ESA RUTA*/ 

//GET ES EL METODO HTTP POR EL CUAL SE TIENE QUE REALIZAR EL PEDIDO 
//saludar es la ruta a la que se le va a realizar el pedido
//funcion callback de get: request(es el pedido al front-end) y response(respuesta que va a ser enviada)
app.get('/saludar', function(req, res) {
	//1ro logueamos por consola que se ha recibido un pedido
    console.log("RecibÃ­ un pedido");
    //2do enviamos por respuesta esta frase
    res.send('Â¡Hola a todos!');
});
// acá definimos el puerto en el cual nuestra aplicación va a estar escuchando
//aca habría que especificar el ip si quiero hacer pedidos a otra computadora
var puerto = '8080';

//con esta función vamos a hacer que nuestra aplicación escuche los pedidos del front-end
//pasamos por parametros el puerto y otra funcion callback
//que va a loguear por consola que se están escuchando los pedidos en el puerto que se especificó
app.listen(puerto, function() {
    console.log("Escuchando pedidos en el puerto " + puerto);
});

//Luego lo ejecutamos por consola