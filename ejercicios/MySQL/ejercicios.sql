CREATE DATABASE clases;

USE clases;

CREATE TABLE `clase` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cantidad_alumnos` int NOT NULL,
  `profesor` varchar(70) NOT NULL,
  `materia` varchar(70) NOT NULL,
  PRIMARY KEY (`id`)
); 





