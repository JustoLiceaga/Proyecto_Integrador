const { search } = require("../routes");
const data = require("../db/usuarios")

const productController ={
    detalle: function(req, res) {
        res.render('product', { usuario: data.usuario, producto: data.productos});
      },
      editar: function(req, res) {
        res.render('product-add', { usuario: data.usuario });
      },
      search: function(req, res) {
        res.render('search-results', {usuario: data.usuario, producto: data.productos} );
      }
}



module.exports = productController