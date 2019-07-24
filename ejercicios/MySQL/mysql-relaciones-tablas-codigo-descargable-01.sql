CREATE TABLE direccion (
    id int NOT NULL,
    calle varchar(40) NOT NULL,
    numero varchar(40) NOT NULL,
    piso int,
    departamento varchar(5),
    codigo_postal varchar(5) NOT NULL,
    ciudad varchar(30) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE cliente (
    id int NOT NULL,
    nombre varchar(60) NOT NULL,
    edad int NOT NULL,
    mail varchar(60),
    direccion_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (direccion_id) REFERENCES direccion(id)
);

