var con = require('../lib/conexionbd');

function buscarPeliculas(req, res) {

    var sql = "select * from pelicula";

    con.query(sql, function(error, resultado, fields) {
        if (error) {
            console.log("Hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }
        var response = {
            'peliculas': resultado
        };

        res.send(JSON.stringify(response));
    });
}

// function buscarCancion(req, res) {
//     var id = req.params.id;
//     var sql = "select * from cancion where id = " + id;
//     con.query(sql, function(error, resultado, fields) {
//         if (error) {
//             console.log("Hubo un error en la consulta", error.message);
//             return res.status(404).send("Hubo un error en la consulta");
//         }
//         if (resultado.length == 0) {
//             console.log("No se encontro ningún nombre con ese id");
//             return res.status(404).send("No se encontro ningún nombre con ese id");
//         } else {
//             var response = {
//                 'cancion': resultado
//             };

//             res.send(JSON.stringify(response));
//         }

//     });
// }

module.exports = {
    buscarPeliculas: buscarPeliculas,
    // buscarCancion: buscarCancion
};