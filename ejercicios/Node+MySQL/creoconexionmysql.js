//importo paquete mysql
var mysql = require('mysql');


//creo conexión
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'acamica',
    database: 'usuarios'
});

module.exports = connection;