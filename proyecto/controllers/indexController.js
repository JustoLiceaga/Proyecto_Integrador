const indexController = {
    index: function(req, res) {
        res.render('index', { title: 'Express' });
      },

    detalle: function(req, res) {
      res.render('product', { title: 'Express' });
    },

}




module.exports = indexController