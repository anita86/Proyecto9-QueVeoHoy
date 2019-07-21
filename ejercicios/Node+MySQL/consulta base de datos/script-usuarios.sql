CREATE DATABASE usuarios;

USE usuarios;

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `usuario` (`id`, `nombre`)
VALUES
	(1,'Alejandra'),
	(2,'Martina'),
	(3,'Mateo'),
	(4,'Lucas'),
	(5,'Sabrina');

