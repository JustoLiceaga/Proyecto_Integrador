const { search } = require("../routes");
const data = require("../db/usuarios")

const indexController = {
    index: function(req, res) {
        res.render('index', { usuario: data.usuario, producto: data.productos});
      }
}




module.exports = indexController