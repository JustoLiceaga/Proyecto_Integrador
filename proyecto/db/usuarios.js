const data = {
    usuario: {
      id: 1,
      nombre: "Genji",
      email: "genji@email.com",
      contraseña: "genji123", 
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
            usuario: "Martín Gómez",
            texto: "Muy cómodas y buena calidad.",
            imagenPerfil: ""
          },
          {
            usuario: "nasus",
            texto: "Me llegaron en dos días, excelente servicio.",
            imagenPerfil: ""
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
        comentarios: []
      },
      {
        id: 4,
        nombre: "Zapatillas deportivas",
        descripcion: "Zapatillas deportivas, ligeras y comodas.",
        precio: 11999,
        imagen: "/images/products/prenda4.jpeg",
        categoria: "Calzado deportivo",
        comentarios: []
      },
      {
        id: 5,
        nombre: "Campera con capucha",
        descripcion: "Campera con capucha, ideal para los dias frios.",
        precio: 4999,
        imagen: "/images/products/prenda5.jpg",
        categoria: "Indumentaria casual",
        comentarios: []
      },
      {
        id: 6,
        nombre: "Pantalones cortos",
        descripcion: "Pantalones cortos, perfectos para el verano.",
        precio: 3999,
        imagen: "/images/products/prenda6.jpg",
        categoria: "Indumentaria casual",
        comentarios: []
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
        id: 8,
        nombre: "Abrigo de lana",
        descripcion: "Calido para el invierno.",
        precio: 20999,
        imagen: "/images/products/prenda8.jpeg",
        categoria: "Abrigo",
        comentarios: []
      },
      {
        id: 9,
        nombre: "Gorra",
        descripcion: "Gorra, con auste trasero.",
        precio: 8999,
        imagen: "/images/products/prenda9.jpeg",
        categoria: "Accesorios",
        comentarios: []
      },
      {
        id: 10,
        nombre: "Bufanda",
        descripcion: "Bufanda suave y calida para el frio.",
        precio: 15999,
        imagen: "/images/products/prenda10.jpg",
        categoria: "Indumentaria",
        comentarios: []
      }
    ]
  };

  module.exports = data