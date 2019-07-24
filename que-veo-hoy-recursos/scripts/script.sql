CREATE DATABASE peliculas;

USE peliculas;

CREATE TABLE `pelicula` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `duracion` int(5) NOT NULL,
  `director` varchar(400) NOT NULL,
  `anio` int(5) NOT NULL,
  `lanzamiento` date NOT NULL,
  `puntuacion` int(2) DEFAULT NULL,
  `poster` varchar(300) NOT NULL,
  `trama` varchar(700) NOT NULL,
  PRIMARY KEY (`id`)
);

