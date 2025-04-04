const indexController = {
    index: function(req, res) {
        res.render('index', { title: 'Express' });
      },

    detalle: function(req, res) {
      res.render('product', { title: 'Express' });
    },
    register: function(req, res) {
      res.render('register', { title: 'Express' });
    },
    login: function(req, res) {
      res.render('login', { title: 'Express' });
    },

}




module.exports = indexController