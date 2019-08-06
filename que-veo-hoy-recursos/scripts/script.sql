CREATE DATABASE peliculas;

USE peliculas;

CREATE TABLE `pelicula` (
  id int NOT NULL AUTO_INCREMENT,
  titulo varchar(100) NOT NULL,
  duracion int(5) NOT NULL,
  director varchar(400) NOT NULL,
  anio int(5) NOT NULL,
  fecha_lanzamiento date NOT NULL,
  puntuacion int(2) DEFAULT NULL,
  poster varchar(300) NOT NULL,
  trama varchar(700) NOT NULL,
  PRIMARY KEY (`id`)

);

CREATE TABLE `genero` (
  id int NOT NULL AUTO_INCREMENT,
  nombre varchar(30),
  PRIMARY KEY (`id`)
);


-- ALTER TABLE pelicula ADD COLUMN genero_id INT; 
-- ALTER TABLE pelicula ADD FOREIGN KEY (genero_id) REFERENCES genero(id);

CREATE TABLE `actor` (
  id int NOT NULL AUTO_INCREMENT,
  nombre varchar(70),
  PRIMARY KEY (`id`)
);

CREATE TABLE `actor_pelicula` (
  id int NOT NULL,
  actor_id int,
  pelicula_id int
);
