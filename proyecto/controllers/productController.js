let db = require("../database/models");
let bcrypt = require('bcryptjs');
const producto = db.Producto
const usuario = db.Usuario
const comentario = db.Comentario
const {Op }= require('sequelize');

const productController = {
  detalle: function (req, res) {
    id = req.params.id;

    producto.findOne({
      where: { id: id },
      include: [
        {
          model: usuario,
          as: 'usuario'
        },
        {
          model: db.Comentario,
          as: 'comentarios',
          include:
            {
              model: usuario,
              as: 'usuario'
            }
        }
      ]
    })
      .then(function (producto) {
        return res.render("product", { producto: producto })
      })
  },

  editar: function (req, res) {
    if (req.session.usuarioLogeado == undefined) {
      return res.redirect('/users/login')
    } else {
      return res.render("product-add");
    }
  },

  search: function (req, res) {

    busqueda = req.query.search;
    producto.findAll({
      where: {
        nombre: { [Op.like]: '%' + busqueda + '%' }
      },
      include: [{
        model: usuario,
        as: 'usuario',
      }]
    })
      .then(function (producto) {
        if (producto.length === 0) {
          return res.send('No hay resultados para su criterio de búsqueda');
        } else {
          return res.render("search-results", { productos: producto })
        }
      })
      .catch(function (error) {
        return res.send(error);
      })
  },
  createProductadd: function(req, res) {


      let imagen = "/images/products/" + req.body.urlImage;
      let nombreProducto = req.body.productName;
      let descripcion = req.body.descripcion;
      let precio = req.body.precio;
      let idUsuario = req.session.usuarioLogeado.id;


        producto.create({
          id_usuario: idUsuario,
          nombre : nombreProducto,
          descripcion: descripcion,
          precio: precio,
          imagen: imagen,
        })
        .then(function(producto) {
          res.redirect('/');


        })
        .catch(function(error) {
          return res.send(error);
        });
    },

}



module.exports = productController