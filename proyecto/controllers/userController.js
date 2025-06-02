let db = require("../database/models");
let bcrypt = require('bcryptjs');
const user = db.Usuario;
const producto = db.Producto;

let userController = {
	register: function(req, res) {
		res.render('register');
	},

	login: function(req, res){
        if(req.session.usuarioLogeado != undefined){
            return res.redirect('/')
        }else{
        return res.render("login");
        }
        },


	profile: function(req, res) {
		id = req.params.id;

		user.findOne({
			where: { id: id },
			include: 
        {
          model: producto,
          as: 'productos'
        },
		})
		.then(function(resultado){
			res.render('profile', {resultado: resultado});
		})
		
	},

	create: function(req, res) {

		let nombres = req.body.usuario;
		let emails = req.body.email;
		let pass = req.body.password;
		let fecha = req.body.fecha;
		let foto = req.body.foto;
		if (foto === ''){
			foto = 'default-image.png';
		}
		let passEncriptada = bcrypt.hashSync(pass, 10);

		user.findOne({
			where: { email: emails }
		})
		.then(function(resultado) {
			if (resultado) {
            	return res.render('register', { error: 'El email ya está registrado.' });
        	}

			if (pass.length < 3) {
            	return res.render('register', { error: 'La contraseña debe tener más de 2 caracteres.' });
        	}

			user.create({
				usuario: nombres,
				email: emails,
				contrasenia: passEncriptada,
				fecha_nacimiento: fecha,
				foto_perfil: "/imagen/users/" + foto
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

	processLogin: function(req,res){

        emails = req.body.email
        password = req.body.password
        recordame = req.body.tyc

		user.findOne({
			where: { email: emails }
		})
        .then(function(resultado){
			if (!resultado) {
            return res.render('login',{error: 'El email no está registrado'});
        	}
            if(bcrypt.compareSync(password, resultado.contrasenia) == true){
                req.session.usuarioLogeado = resultado;
                
                if (recordame == 'on') {
                    res.cookie('usuario', resultado.email, {maxAge: 1000 * 60 * 10})
                }
                return res.redirect('/')
            
            } else{
                return res.render('login',{error: 'la contrasenia es incorrecta'})
            }
            })
			.catch(function(error) {
				return res.send(error);
			});


    },

	logout: function(req, res) {
		req.session.destroy(function() {
			res.clearCookie('usuario');
			res.redirect('/');
		});
	}
};

module.exports = userController;