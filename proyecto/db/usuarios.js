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
        nombre: "Zapatillas Urbanas",
        descripcion: "Zapatillas cómodas para uso diario.",
        precio: 18999,
        imagen: "",
        categoria: "Calzado",
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
        nombre: "Campera Impermeable",
        descripcion: "Ideal para días de lluvia y viento.",
        precio: 29999,
        imagen: "",
        categoria: "Indumentaria",
        comentarios: [
          {
            usuario: "Lucas Ruiz",
            texto: "Me salvó en un viaje a la montaña.",
            imagenPerfil: ""
          }
        ]
      },
      {
        id: 3,
        nombre: "Mochila Urbana",
        descripcion: "Espaciosa y resistente, ideal para todos los días.",
        precio: 14999,
        imagen: "",
        categoria: "Accesorios",
        comentarios: []
      },
      {
        id: 4,
        nombre: "Pantalón Jogger",
        descripcion: "Comodidad y estilo para tu rutina.",
        precio: 11999,
        imagen: "",
        categoria: "Indumentaria",
        comentarios: []
      },
      {
        id: 5,
        nombre: "Remera Básica Blanca",
        descripcion: "Infaltable en cualquier armario.",
        precio: 4999,
        imagen: "",
        categoria: "Indumentaria",
        comentarios: []
      },
      {
        id: 6,
        nombre: "Gorra Negra",
        descripcion: "Clásica y versátil.",
        precio: 3999,
        imagen: "",
        categoria: "Accesorios",
        comentarios: []
      },
      {
        id: 7,
        nombre: "Buzo Oversize",
        descripcion: "Ideal para días fríos con estilo.",
        precio: 13999,
        imagen: "",
        categoria: "Indumentaria",
        comentarios: []
      },
      {
        id: 8,
        nombre: "Reloj Deportivo",
        descripcion: "Con cronómetro y resistencia al agua.",
        precio: 20999,
        imagen: "",
        categoria: "Accesorios",
        comentarios: []
      },
      {
        id: 9,
        nombre: "Lentes de Sol",
        descripcion: "Protección UV y mucho estilo.",
        precio: 8999,
        imagen: "",
        categoria: "Accesorios",
        comentarios: []
      },
      {
        id: 10,
        nombre: "Camisa de Lino",
        descripcion: "Ligera y fresca para el verano.",
        precio: 15999,
        imagen: "",
        categoria: "Indumentaria",
        comentarios: []
      }
    ]
  };

  module.exports = data