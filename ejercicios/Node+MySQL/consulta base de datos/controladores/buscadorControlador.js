var con = require('../conexion_bd');

function buscarNombres(req, res) {
    var sql = "select * from usuario"
    con.query(sql, function(error, resultado, fields) {
        if (error) {
            console.log("Hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }
        var response = {
            'nombres': resultado
        };

        res.send(JSON.stringify(response));
    });
}

function buscarNombre(req, res) {
    var id = req.params.id;
    var sql = "select * from usuario where id = " + id;
    con.query(sql, function(error, resultado, fields) {
        if (error) {
            console.log("Hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }
        if (resultado.length == 0) {
            console.log("No se encontro ningún nombre con ese id");
            return res.status(404).send("No se encontro ningún nombre con ese id");
        } else {
            var response = {
                'nombre': resultado[0].nombre
            };

            res.send(JSON.stringify(response));
        }

    });
}

module.exports = {
    buscarNombres: buscarNombres,
    buscarNombre: buscarNombre
};