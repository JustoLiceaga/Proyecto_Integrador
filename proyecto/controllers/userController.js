const { search } = require("../routes");
const data = require("../db/usuarios")

const userController ={
    register: function(req, res) {
        res.render('register', { title: 'Express' });
      },
      login: function(req, res) {
        res.render('login', { title: 'Express' });
      },
      profile: function(req, res) {
        res.render('profile', { usuario: data.usuario, producto: data.productos });
      },
}





module.exports = userController