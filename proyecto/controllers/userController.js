let db = require("../database/models");
let bcrypt = require('bcryptjs');
const user = db.Usuario;

let userController = {
	register: function(req, res) {
		res.render('register');
	},

	login: function(req, res) {
		res.render('login');
	},

	profile: function(req, res) {
		res.render('profile', { usuario: data.usuario, producto: data.productos });
	},

	create: function(req, res) {
		let usuarios = req.body.usuario;
		let emails = req.body.email;
		let pass = req.body.password;
		let fecha = req.body.fecha;
		let passEncriptada = bcrypt.hashSync(pass, 10);

		user.findOne({
			where: { email: emails }
		})
		.then(function(resultado) {
			if (resultado) {
				return res.send('ya existe el usuario');
			}

			if (pass.length < 3) {
				return res.send('La contrasenia debe tener mas de 2 caracteres');
			}

			user.create({
				usuario: nombres,
				email: emails,
				contrasenia: passEncriptada,
				fecha_nacimiento: fecha
			})
			.then(function(user) {
				res.redirect('/users/login');
			})
			.catch(function(error) {
				return res.send(error);
			});
		})
		.catch(function(error) {
			return res.send(error);
		});
	},
};

module.exports = userController;