let db = require("../database/models");
let bcrypt = require('bcryptjs');
const producto = db.Producto
const usuario = db.Usuario;
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
          as: 'comentarios'
        }
      ]
    })
      .then(function (producto) {
        return res.render("product", { producto: producto })
      })
  },

  editar: function (req, res) {
    res.render('product-add', { usuario: data.usuario });
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
        if (!producto) {
          return res.send('No hay resultados para su criterio de búsqueda');
        } else {
          return res.render("search-results", { productos: producto })
        }
      })
      .catch(function (error) {
        return res.send(error);
      })
  }
}



module.exports = productController