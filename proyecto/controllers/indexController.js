const { search } = require("../routes");
const data = require("../db/usuarios")

const indexController = {
    index: function(req, res) {
        res.render('index', { title: 'Express' });
      },

    detalle: function(req, res) {
      res.render('product', { usuario: data.usuario, producto: data.productos});
    },
    register: function(req, res) {
      res.render('register', { title: 'Express' });
    },
    login: function(req, res) {
      res.render('login', { title: 'Express' });
    },
    editar: function(req, res) {
      res.render('product-add', { usuario: data.usuario });
    },
    profile: function(req, res) {
      res.render('profile', { usuario: data.usuario, producto: data.productos });
    },
    search: function(req, res) {
      res.render('search-results', {usuario: data.usuario, producto: data.productos} );
    },
}




module.exports = indexController