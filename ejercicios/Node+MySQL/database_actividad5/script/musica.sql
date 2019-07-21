CREATE DATABASE musica;

USE musica;

CREATE TABLE `cancion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) DEFAULT NULL,
  `autor` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `cancion` (`id`, `titulo`, `autor`)
VALUES
	(1,'Somebody to love','Queen'),
	(2,'We will rock you','Queen'),
	(3,'Hello','Adele'),
	(4,'Rolling in the deep','Adele'),
	(5,'I was made for loving you','Kiss'),
	(6,'I love it loud','Kiss'),
	(7,'Te necesito','Shakira'),
	(8,'Que me quedes tu','Shakira');
