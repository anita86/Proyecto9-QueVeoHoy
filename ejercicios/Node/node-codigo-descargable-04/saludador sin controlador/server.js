var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/saludar', function(req, res) {
    var nombre = req.query.nombre;
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth();
    var año = fecha.getUTCFullYear();

    var meses = new Array();
    meses[0] = "Enero";
    meses[1] = "Febrero";
    meses[2] = "Marzo";
    meses[3] = "Abril";
    meses[4] = "Mayo";
    meses[5] = "Junio";
    meses[6] = "Julio";
    meses[7] = "Agosto";
    meses[8] = "Septiembre";
    meses[9] = "Octubre";
    meses[10] = "Noviembre";
    meses[11] = "Diciembre";
    var mes_nombre = meses[mes];
    res.send("Hola " + nombre + ", hoy es " + dia + " de " + mes_nombre + " de " + año);
});

var puerto = '8080';

app.listen(puerto, function() {
    console.log("Escuchando pedidos en el puerto " + puerto);
});