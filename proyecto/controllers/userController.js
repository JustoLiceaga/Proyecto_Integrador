const data = require("../db/usuarios")

const userController ={
    register: function(req, res) {
        res.render('register');
      },
      login: function(req, res) {
        res.render('login');
      },
      profile: function(req, res) {
        res.render('profile', { usuario: data.usuario, producto: data.productos });
      },
}





module.exports = userController