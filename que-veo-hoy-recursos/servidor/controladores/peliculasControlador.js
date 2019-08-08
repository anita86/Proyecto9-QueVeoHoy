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

  var whereSql = (function() {
    if (titulo && anio && genero) {
      return "WHERE " + sqlTitulo + " AND " + sqlAnio + " AND " + sqlGenero + " ";
    } else if (titulo && anio && !genero) {
      return "WHERE " + sqlTitulo + " AND " + sqlAnio + " ";
    } else if (titulo && !anio && genero) {
      return "WHERE " + sqlTitulo + " AND " + sqlGenero + " ";
    } else if (!titulo && anio && genero) {
      return "WHERE " + sqlAnio + " AND " + sqlGenero + " ";
    } else if (titulo && !anio && !genero) {
      return "WHERE " + sqlTitulo + " ";
    } else if (!titulo && anio && !genero) {
      return "WHERE " + sqlAnio + " ";
    } else if (!titulo && !anio && genero) {
      return "WHERE " + sqlGenero + " ";
    } else return "";
  })()


  var sql = "SELECT * FROM pelicula " + whereSql + " ORDER BY " + columna_orden + " " + tipo_orden + " LIMIT " + (pagina - 1) * cantidad + ", " + cantidad;

  //se ejecuta la consulta
  con.query(sql, function(error, resultado, fields) {
    if (error) {
      console.log("Hubo un error en la consulta", error.message);
      return res.status(404).send("Hubo un error en la consulta");
    }

    var sqlTotal = "SELECT COUNT(*) AS total FROM pelicula " + whereSql;

    con.query(sqlTotal, function(error, resultado2, fields) {
      if (error) {
        console.log("Hubo un error en la consulta", error.message);
        return res.status(404).send("Hubo un error en la consulta");
      }
      var response = {
        'peliculas': resultado,
        'total': resultado2[0].total
      };
      res.send(JSON.stringify(response));
    });
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

function informacionPelicula(req, res) {

  var id = req.params.id;

  var sqlPelis = "SELECT pelicula.*, genero.nombre FROM pelicula JOIN genero ON pelicula.genero_id = genero.id WHERE pelicula.id = '" + id + "'";

  var sqlActores = "SELECT actor_pelicula.*, actor.nombre FROM actor_pelicula JOIN actor ON actor_id = actor.id WHERE pelicula_id = '" + id + "'";

  con.query(sqlPelis, function(error, resultado, fields) {

    if (error) {
      console.log("Hubo un error en la consulta", error.message);
      return res.status(404).send("Hubo un error en la consulta");
    }

    con.query(sqlActores, function(error, resultado2, fields) {
      var response = {
        'pelicula': resultado[0],
        'actores': resultado2,
        'genero': resultado[0]
      };
      res.send(JSON.stringify(response));
    });
  });

}

function recomendarPelicula(req, res) {

  //Primero obtengo query params
  var anioInicio = req.query.anio_inicio;
  var anioFin = req.query.anio_fin;
  var genero = req.query.genero;
  var puntuacion = req.query.puntuacion;

  var sqlAnio = "pelicula.anio BETWEEN " + anioInicio + " AND " + anioFin;
  var sqlPuntuacion = "pelicula.puntuacion >= " + puntuacion;
  var sqlGenero = "genero.nombre = '" + genero + "'";

  var whereSql = (function() {
    if (genero && puntuacion && !anioInicio) {
      return "WHERE " + sqlGenero + " AND " + sqlPuntuacion
    } else if (genero && !puntuacion && anioInicio) {
      return "WHERE " + sqlGenero + " AND " + sqlAnio
    } else if (genero && !puntuacion && !anioInicio) {
      return "WHERE " + sqlGenero
    } else if (!genero && puntuacion && !anioInicio) {
      return "WHERE " + sqlPuntuacion
    } else if (!genero && !puntuacion && anioInicio) {
      return "WHERE " + sqlAnio
    } else if (!genero && !puntuacion && !anioInicio) {
      return ""
    }
  })()

  var sql = "SELECT pelicula.id, pelicula.titulo, pelicula.trama, pelicula.poster, pelicula.anio, pelicula.puntuacion, genero.nombre FROM pelicula JOIN genero ON pelicula.genero_id = genero.id " + whereSql;

  //     //se ejecuta la consulta
  con.query(sql, function(error, resultado, fields) {
    if (error) {
      console.log("Hubo un error en la consulta", error.message);
      return res.status(404).send("Hubo un error en la consulta");
    }
    var response = {
      'peliculas': resultado
    };
    res.send(JSON.stringify(response));
  })
}

module.exports = {
  buscarPeliculas: buscarPeliculas,
  buscarGenero: buscarGenero,
  informacionPelicula: informacionPelicula,
  recomendarPelicula: recomendarPelicula
};
