let db = require("../database/models");
let bcrypt = require ('bcryptjs');


const indexController = {
    index: function(req, res) {
        
      db.Producto.findAll({
        include: [
          {
            model: db.Usuario,
            as: 'usuario'
          },
        ]
      })
      .then(function(productos) {
        res.render('index', {producto: productos });
      })
      .catch(function(error) {
        res.send(error);
      });
      
      }
}




module.exports = indexController

