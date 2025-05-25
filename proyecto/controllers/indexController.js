let db = require("../database/models");
let bcrypt = require ('bcryptjs');


const indexController = {
    index: function(req, res) {
        res.render('index', { usuario: data.usuario, producto: data.productos});
      }
}




module.exports = indexController