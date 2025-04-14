const data = {
    usuario: {
      id: 1,
      nombre: "Juan",
      email: "juan@gmail.com",
      contraseña: "1234", 
      direccion: "Villa 742",
      telefono: "+54 9 11 2345 6789",
      imagenPerfil: "/images/users/fotoPerfil.jpg"
    },
  
    productos: [
      {
        id: 1,
        nombre: "Camiseta Basica",
        descripcion: "Camiseta de algodon, comoda y versatil.",
        precio: 18999,
        imagen: "/images/products/prenda1.jpg",
        categoria: "Indumentaria casual",
        comentarios: [
          {
            usuario: "Martín",
            texto: "La camiseta es ideal para el día a día. Fresca y cómoda.",
            imagenPerfil: "/images/users/chad.jpg"
          },
          {
            usuario: "Sofía",
            texto: "Buena calidad por el precio. Me pedí otra en otro color.",
            imagenPerfil: "/images/users/chad2.jpg"
          },
          {
            usuario: "Nico",
            texto: "El algodón se siente suave, muy recomendable.",
            imagenPerfil: "/images/users/chad3.jpg"
          },
          {
            usuario: "Ana",
            texto: "Me encantó, aunque un poco justa de talle.",
            imagenPerfil: "/images/users/chad4.jpg"
          }
        ]
      },
      {
        id: 2,
        nombre: "Buzo oversize",
        descripcion: "Buzo oversize premuim.",
        precio: 29999,
        imagen: "/images/products/prenda2.png",
        categoria: "Indumentaria casual",
        comentarios: [
          {
            usuario: "Martín",
            texto: "Muy cómodas y buena calidad.",
            imagenPerfil: "/images/users/chad.jpg"
          },
          {
            usuario: "nasus",
            texto: "Me llegaron en dos días, excelente servicio.",
            imagenPerfil: "/images/users/chad2.jpg"
          },
          {
            usuario: "Agus",
            texto: "El buzo es enorme y abrigado, justo lo que buscaba.",
            imagenPerfil: "/images/users/chad3.jpg"
          },
          {
            usuario: "Laura",
            texto: "Me encantó el color, aunque el talle viene un poco grande.",
            imagenPerfil: "/images/users/chad4.jpg"
          },
        ]
      },
      {
        id: 3,
        nombre: "Chaqueta de cuero",
        descripcion: "Chaqueta de cuero sintetico, perfecto para el invierno",
        precio: 14999,
        imagen: "/images/products/prenda3.jpg",
        categoria: "Abrigo",
        comentarios: [
          {
            usuario: "Lucas",
            texto: "La chaqueta se ve de buena calidad y tiene estilo.",
            imagenPerfil: "/images/users/chad.jpg"
          },
          {
            usuario: "Julieta",
            texto: "Perfecta para salir de noche. Me encanta el diseño.",
            imagenPerfil: "/images/users/chad2.jpg"
          },
          {
            usuario: "Tomás",
            texto: "Abriga bastante y se ve muy elegante.",
            imagenPerfil: "/images/users/chad3.jpg"
          },
          {
            usuario: "Flor",
            texto: "Pensé que sería más pesada, pero es muy cómoda.",
            imagenPerfil: "/images/users/chad4.jpg"
          }
        ]
      },
      {
        id: 4,
        nombre: "Zapatillas deportivas",
        descripcion: "Zapatillas deportivas, ligeras y comodas.",
        precio: 11999,
        imagen: "/images/products/prenda4.jpeg",
        categoria: "Calzado deportivo",
        comentarios: [
          {
            usuario: "Julián",
            texto: "Livianas y cómodas, las uso para correr.",
            imagenPerfil: "/images/users/chad.jpg"
          },
          {
            usuario: "Martina",
            texto: "Quedan geniales con cualquier look.",
            imagenPerfil: "/images/users/chad2.jpg"
          },
          {
            usuario: "Bruno",
            texto: "Buen agarre en la suela y cómodas para todo el día.",
            imagenPerfil: "/images/users/chad3.jpg"
          },
          {
            usuario: "Valentina",
            texto: "Muy buena calidad, llegaron en perfecto estado.",
            imagenPerfil: "/images/users/chad4.jpg"
          }
          
        ]
      },
      {
        id: 5,
        nombre: "Campera con capucha",
        descripcion: "Campera con capucha, ideal para los dias frios.",
        precio: 4999,
        imagen: "/images/products/prenda5.jpg",
        categoria: "Indumentaria casual",
        comentarios: [
          {
            usuario: "Agus",
            texto: "Súper abrigada y el diseño me encanta.",
            imagenPerfil: "/images/users/chad.jpg"
          },
          {
            usuario: "Delfi",
            texto: "El gorro es grande y cubre bien del frío.",
            imagenPerfil: "/images/users/chad2.jpg"
          },
          {
            usuario: "Rami",
            texto: "El cierre se siente resistente. Muy buena compra.",
            imagenPerfil: "/images/users/chad3.jpg"
          },
          {
            usuario: "Clara",
            texto: "Es más gruesa de lo que esperaba, ¡me encantó!",
            imagenPerfil: "/images/users/chad4.jpg"
          }
          
        ]
      },
      {
        id: 6,
        nombre: "Pantalones cortos",
        descripcion: "Pantalones cortos, perfectos para el verano.",
        precio: 3999,
        imagen: "/images/products/prenda6.jpg",
        categoria: "Indumentaria casual",
        comentarios: [
          {
            usuario: "Luca",
            texto: "Livianos, ideales para entrenar.",
            imagenPerfil: "/images/users/chad.jpg"
          },
          {
            usuario: "Cami",
            texto: "Me encantó el color y el corte.",
            imagenPerfil: "/images/users/chad2.jpg"
          },
          {
            usuario: "Pedro",
            texto: "Perfectos para los días calurosos.",
            imagenPerfil: "/images/users/chad3.jpg"
          },
          {
            usuario: "Rocío",
            texto: "El ajuste en la cintura es cómodo.",
            imagenPerfil: "/images/users/chad4.jpg"
          }
          
        ]
      },
      {
        id: 7,
        nombre: "Camisa manga larga",
        descripcion: "Camisa de manga larga, ideal para el trabajo o eventos.",
        precio: 13999,
        imagen: "/images/products/prenda7.jpeg",
        categoria: "Indumentaria formal",
        comentarios: [
          {
            usuario: "Nahuel",
            texto: "La uso para la oficina, queda muy bien.",
            imagenPerfil: "/images/users/chad.jpg"
          },
          {
            usuario: "Lucía",
            texto: "Muy elegante y el color es hermoso.",
            imagenPerfil: "/images/users/chad2.jpg"
          },
          {
            usuario: "Sebas",
            texto: "Buen material, no se arruga tanto.",
            imagenPerfil: "/images/users/chad3.jpg"
          },
          {
            usuario: "Mili",
            texto: "La tela es suave, me sorprendió para bien.",
            imagenPerfil: "/images/users/chad4.jpg"
          }
          
        ]
      },
      {
        id: 8,
        nombre: "Abrigo de lana",
        descripcion: "Calido para el invierno.",
        precio: 20999,
        imagen: "/images/products/prenda8.jpeg",
        categoria: "Abrigo",
        comentarios: [
          {
            usuario: "Gabriel",
            texto: "Abriga muchísimo, ideal para el invierno.",
            imagenPerfil: "/images/users/chad.jpg"
          },
          {
            usuario: "Noe",
            texto: "La textura es muy suave y se ve elegante.",
            imagenPerfil: "/images/users/chad2.jpg"
          },
          {
            usuario: "Marcos",
            texto: "Un poco largo, pero muy cómodo.",
            imagenPerfil: "/images/users/chad3.jpg"
          },
          {
            usuario: "Sol",
            texto: "Lo usé en un viaje al sur y me salvó del frío.",
            imagenPerfil: "/images/users/chad4.jpg"
          }
          
        ]
      },
      {
        id: 9,
        nombre: "Gorra",
        descripcion: "Gorra, con auste trasero.",
        precio: 8999,
        imagen: "/images/products/prenda9.jpeg",
        categoria: "Accesorios",
        comentarios: [
          {
            usuario: "Eze",
            texto: "Buen diseño y visera curva, como me gusta.",
            imagenPerfil: "/images/users/chad.jpg"
          },
          {
            usuario: "Emma",
            texto: "Me queda perfecta, ajustable y cómoda.",
            imagenPerfil: "/images/users/chad2.jpg"
          },
          {
            usuario: "Facu",
            texto: "Ideal para el sol. La uso todos los días.",
            imagenPerfil: "/images/users/chad3.jpg"
          },
          {
            usuario: "Beli",
            texto: "Buen material, no se deforma con el uso.",
            imagenPerfil: "/images/users/chad4.jpg"
          }
          
        ]
      },
      {
        id: 10,
        nombre: "Bufanda",
        descripcion: "Bufanda suave y calida para el frio.",
        precio: 15999,
        imagen: "/images/products/prenda10.jpeg",
        categoria: "Indumentaria",
        comentarios: [
          {
            usuario: "Gonzalo",
            texto: "Re suave y calentita. Excelente calidad.",
            imagenPerfil: "/images/users/chad.jpg"
          },
          {
            usuario: "Carla",
            texto: "El diseño es precioso, combina con todo.",
            imagenPerfil: "/images/users/chad2.jpg"
          },
          {
            usuario: "Iván",
            texto: "Muy abrigada, ideal para el frío de la mañana.",
            imagenPerfil: "/images/users/chad3.jpg"
          },
          {
            usuario: "Majo",
            texto: "Me encantó, la uso con mi abrigo favorito.",
            imagenPerfil: "/images/users/chad4.jpg"
          }
          
        ]
      }
    ]
  };

  module.exports = data