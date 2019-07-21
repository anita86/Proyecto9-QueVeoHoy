var mysql = require('mysql');

//Ejemplos de parámetros de conexión. Completá con los parámetros que correspondan según tu usuario.
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'acamica',
    database: 'musica'
});

module.exports = connection;