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
          {
            model: db.Producto,
            as: 'producto'
          }]
      })
      .then(function(productos) {
        res.render('index', { usuario: usuario, producto: producto });
      })
      .catch(function(error) {
        res.send(error);
      });
      // esto estaba antes: (db vieja) res.render('index', { usuario: data.usuario, producto: data.productos});
      }
}




module.exports = indexController