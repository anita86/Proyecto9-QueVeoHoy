var con = require('../lib/conexionbd');

function buscarPeliculas(req, res) {
    
    //Primero obtengo query params
    var titulo = req.query.titulo;
    var anio = req.query.anio;
    var genero = req.query.genero;
	var pagina = req.query.pagina;
    var cantidad = req.query.cantidad;
    var columna_orden = req.query.columna_orden;
    var tipo_orden = req.query.tipo_orden;

    var sqlTitulo = "titulo LIKE '%" + titulo + "%' ";
    var sqlAnio = "anio = " + anio;
    var sqlGenero = "genero_id = " + genero;

    var whereSql = (function(){ 
        if (titulo && anio && genero){
            return "WHERE " + sqlTitulo + " AND " + sqlAnio + " AND " + sqlGenero + " ";
        } 
        else if (titulo && anio && !genero ){
            return "WHERE " + sqlTitulo + " AND " + sqlAnio + " ";
        } 
        else if (titulo && !anio && genero ){
            return "WHERE " + sqlTitulo + " AND " + sqlGenero + " ";
        } 
        else if (!titulo && anio && genero ){
            return "WHERE " + sqlAnio + " AND " + sqlGenero + " ";
        } 
        else if (titulo && !anio && !genero ){
            return "WHERE " + sqlTitulo + " ";
        } 
        else if (!titulo && anio && !genero ){
            return "WHERE " + sqlAnio + " ";
        } 
        else if (!titulo && !anio && genero ){
            return "WHERE " + sqlGenero + " ";
        }
        else return "";       
    })()
    

    var sql = "SELECT * FROM pelicula " + whereSql + " ORDER BY " +  columna_orden + " " +  tipo_orden + " LIMIT " +  (pagina - 1) * cantidad + ", " + cantidad;
    
    
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

module.exports = {
    buscarPeliculas: buscarPeliculas,
    buscarGenero: buscarGenero
};