
DROP DATABASE IF EXISTS catalogo_productos;
CREATE DATABASE catalogo_productos;
USE catalogo_productos;


CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contrasenia VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    foto_perfil VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    imagen VARCHAR(255),
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(300),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);


CREATE TABLE comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_producto INT NOT NULL,
    id_usuario INT NOT NULL,
    texto VARCHAR(355) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_producto) REFERENCES productos(id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);


INSERT INTO usuarios (usuario, email, contrasenia, fecha_nacimiento) VALUES
('Juan', 'juan@gmail.com', '1234', '1990-01-01'),



INSERT INTO productos (id_usuario, nombre, descripcion, precio, imagen) VALUES 
(1, 'Camiseta Básica', 'Camiseta de algodón, cómoda y versátil.', 18999, '/images/products/prenda1.jpg'),
(1, 'Buzo oversize', 'Buzo oversize premium.', 29999, '/images/products/prenda2.png'),
(1, 'Chaqueta de cuero', 'Chaqueta de cuero sintético, perfecta para el invierno.', 14999, '/images/products/prenda3.jpg'),
(1, 'Zapatillas deportivas', 'Zapatillas deportivas, ligeras y cómodas.', 11999, '/images/products/prenda4.jpeg'),
(1, 'Campera con capucha', 'Campera con capucha, ideal para los días fríos.', 4999, '/images/products/prenda5.jpg'),
(1, 'Pantalones cortos', 'Pantalones cortos, perfectos para el verano.', 3999, '/images/products/prenda6.jpg'),
(1, 'Camisa manga larga', 'Camisa de manga larga, ideal para el trabajo o eventos.', 13999, '/images/products/prenda7.jpeg'),
(1, 'Abrigo de lana', 'Abrigo cálido para el invierno.', 20999, '/images/products/prenda8.jpeg'),
(1, 'Gorra', 'Gorra con ajuste trasero.', 8999, '/images/products/prenda9.jpeg'),
(1, 'Bufanda', 'Bufanda suave y cálida para el frío.', 15999, '/images/products/prenda10.jpeg');



INSERT INTO comentarios (id_producto, id_usuario, texto)
VALUES 
(1, 1, 'La camiseta es ideal para el día a día. Fresca y cómoda.'),
(1, 1, 'Buena calidad por el precio. Me pedí otra en otro color.'),
(1, 1, 'El algodón se siente suave, muy recomendable.'),
(1, 1, 'Me encantó, aunque un poco justa de talle.');

INSERT INTO comentarios (id_producto, id_usuario, texto)
VALUES 
(2, 1, 'Muy cómodas y buena calidad.'),
(2, 1, 'Me llegaron en dos días, excelente servicio.'),
(2, 1, 'El buzo es enorme y abrigado, justo lo que buscaba.'),
(2, 1, 'Me encantó el color, aunque el talle viene un poco grande.');

INSERT INTO comentarios (id_producto, id_usuario, texto)
VALUES 
(3, 1, 'La chaqueta se ve de buena calidad y tiene estilo.'),
(3, 1, 'Perfecta para salir de noche. Me encanta el diseño.'),
(3, 1, 'Abriga bastante y se ve muy elegante.'),
(3, 1, 'Pensé que sería más pesada, pero es muy cómoda.');

INSERT INTO comentarios (id_producto, id_usuario, texto)
VALUES 
(4, 1, 'Livianas y cómodas, las uso para correr.'),
(4, 1, 'Quedan geniales con cualquier look.'),
(4, 1, 'Buen agarre en la suela y cómodas para todo el día.'),
(4, 1, 'Muy buena calidad, llegaron en perfecto estado.');

INSERT INTO comentarios (id_producto, id_usuario, texto)
VALUES 
(5, 1, 'Súper abrigada y el diseño me encanta.'),
(5, 1, 'El gorro es grande y cubre bien del frío.'),
(5, 1, 'El cierre se siente resistente. Muy buena compra.'),
(5, 1, 'Es más gruesa de lo que esperaba, ¡me encantó!');

INSERT INTO comentarios (id_producto, id_usuario, texto)
VALUES 
(6, 1, 'Livianos, ideales para entrenar.'),
(6, 1, 'Me encantó el color y el corte.'),
(6, 1, 'Perfectos para los días calurosos.'),
(6, 1, 'El ajuste en la cintura es cómodo.');

INSERT INTO comentarios (id_producto, id_usuario, texto)
VALUES 
(7, 1, 'La uso para la oficina, queda muy bien.'),
(7, 1, 'Muy elegante y el color es hermoso.'),
(7, 1, 'Buen material, no se arruga tanto.'),
(7, 1, 'La tela es suave, me sorprendió para bien.');

INSERT INTO comentarios (id_producto, id_usuario, texto)
VALUES 
(8, 1, 'Abriga muchísimo, ideal para el invierno.'),
(8, 1, 'La textura es muy suave y se ve elegante.'),
(8, 1, 'Un poco largo, pero muy cómodo.'),
(8, 1, 'Lo usé en un viaje al sur y me salvó del frío.');

INSERT INTO comentarios (id_producto, id_usuario, texto)
VALUES 
(9, 1, 'Buen diseño y visera curva, como me gusta.'),
(9, 1, 'Me queda perfecta, ajustable y cómoda.'),
(9, 1, 'Ideal para el sol. La uso todos los días.'),
(9, 1, 'Buen material, no se deforma con el uso.');

INSERT INTO comentarios (id_producto, id_usuario, texto)
VALUES 
(10, 1, 'Re suave y calentita. Excelente calidad.'),
(10, 1, 'El diseño es precioso, combina con todo.'),
(10, 1, 'Muy abrigada, ideal para el frío de la mañana.'),
(10, 1, 'Me encantó, la uso con mi abrigo favorito.');
