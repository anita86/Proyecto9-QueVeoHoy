var con = require('../lib/conexionbd');

function buscarPeliculas(req, res) {
    //Primero obtengo query params
    var titulo = req.query.titulo;
    var anio = req.query.anio;
    var genero = req.query.genero;

    if (titulo){
        var sql = "select * from pelicula where titulo like '%" + titulo + "%'";

    } else if (anio) {
        var sql = "select * from pelicula where anio = '" + anio + "'";

    } else if (genero) {
        var sql = "select * from pelicula where genero_id = '" + genero + "'";
    
    } else if (titulo & anio & genero){
        var sql = "select * from pelicula where titulo like '%" + titulo + "%' AND anio = '" + anio + "' AND genero_id = '" + genero + "' ";

    } else if (titulo & anio){
        var sql = "select * from pelicula where titulo like '%" + titulo + "%' AND anio = '" + anio + "' ";

    } else if (titulo & genero){
        var sql = "select * from pelicula where titulo like '%" + titulo + "%' AND genero_id = '" + genero + "' ";
  
    } else if (anio & genero){
        var sql = "select * from pelicula where anio = '" + anio + "' AND genero_id = '" + genero + "' ";

    } else {// si no especifica parámetros envío todas las pelis
        var sql = "select * from pelicula";

    }
//se ejecuta la consulta
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

function buscarGenero(req, res) {

    var sqlGenero = "select * from genero";

    con.query(sqlGenero, function(error, resultado, fields) {
        if (error) {
            console.log("Hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }
        var response = {
            'generos': resultado
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
    buscarGenero: buscarGenero
};