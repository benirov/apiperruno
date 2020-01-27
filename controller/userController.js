'use strict';

// const User = require('../model/user');
// const services = require('../services/auth');
// const mailer = require('./mailerCtrl');

function getUsers(req, res)
{
	
	User.find({}, (error, user) =>
	{
		if(error)
		{
			return res.status(500).send({message: `error al realizar la peticiòn: ${error}`});
		}
		else if(!user || user == [] || user.length == 0)
		{
			return res.status(404).send({message: `No existen usuarios en la base de datos`});
		}else
		{
			return res.status(200).send({user})
		}
		
	});
}


function getUser(req, res)
{
	let id = req.params.id;
	User.findById(id, (error, user) =>
	{
		if(error)
		{
			return res.status(500).send({message: `error al realizar la peticiòn: ${error}`});
		}
		else if(!user)
		{
			return res.status(404).send({message: `El usuario no existe`});	
		}else
		{
			return res.status(200).send({user})
		}
	});
}

function getDogsUser()
{
	
}


function saveUser(req, res)
{
	let user = new User;
	user.userName = req.body.userName;
	user.email = req.body.email;
	user.password = req.body.password;
	// user.interests = JSON.parse(req.body.interests);	
	user.phone = req.body.phone;
	user.imgProfile = req.body.imgProfile;
	user.Emailverify = false;
	user.save((error, UserRes) =>
	{
		if(error)
		{
			res.status(500).send({message: `error al guardar Usuario: ${error}`});
		}
		else
		{
			console.log('usuario creado', UserRes);
			res.status(200).send({message: `Usuario guardado: ${UserRes}`});
			let urlToken = services.createToken(UserRes._id);
			// console.log(urlToken);
			mailer.buildEmail(1, UserRes, urlToken);

		}
	});
}

function updateUser(req, res)
{
	console.log("llengo a la funcion");
  let id = req.params.id;
  let update = req.body;
  console.log(update);
  if(update.interests != undefined)
  {
  	update.interests = JSON.parse(req.body.interests);
  }

  User.findByIdAndUpdate(id, update, (error, userUpdate) =>
  { 
    if(error)
    {
		console.log("no se actualiza");
      return res.status(500).send({message: `error al actualizar el usuario ${error}`});
    }
    else
    {
		console.log(" se actualiza");
		return res.status(200).send({message: `Datos de usuario actualizados`},{user: userUpdate});
    }
  });

}



function deleteUser(req, res)
{
  let id = req.params.id;

  User.findById(id, (error, user) =>
  {
    if(error)
    {
      res.status(500).send({message: `Error al eliminar Usuario: ${error}`});
    }
    else
    {
      user.remove(err =>
        {
          if(err)
          {
            res.status(500).send({message: `Error al eliminar Usuario: ${err}`});
          }
          else
          {
            res.status(200).send({message: `Usuario  con id: ${id} eliminado`});
          }
        });
    }
  });

}

function signIn(req, res)
{
	User.find({email: req.body.email, password: req.body.password}, (error, user) =>
	{
		if(error)
		{
			res.status(200).send({message: `error al realizar la peticiòn`});
		}
		else if(!user || user ==  '')
		{
			res.status(404).send({message: `usuario no encontrado`});
		}
		else
		{
			req.session.tokenIdUser = services.createToken(user);
			req.session.breedUser = user[0].interests.dogs;
			req.session.emailVerify = user[0].Emailverify;
			req.session.user = user[0]._id;
		      res.status(200).send({
		        message: 'logueado correctamente',
		        token: services.createToken(user),
		        status: 200
		      });
		}
	});
}

function casesDogStatus(req, res)
{
	let idDog = req.params.idDog;

	Adopt.find({'idDog': idDog}, (error, cases) =>
	{
		if(error)
		{
			res.status(500).send({message: `error al realizar la peticion: ${error}`});
		}else
		{
			res.status(200).send({cases});
		}
	})
}

function aprovedCasesDog(req, res)
{
	let idDog = req.params.idDog;
	Adopt.aprovedCase(idDog).then()
}



function findUser(id)
{
	return new Promise(function(resolve, reject)
	{
		var req;
		 User.findById(id, (error, user) =>
		  {
		  	req = user;
		  });

		 setTimeout(
			() => req != 'undefined'
				? resolve(req)
				: reject(req),
			  1000
		  );

	})

}

function findEmail(breed)
{
	return new Promise(function(resolve, reject)
	{
		var req;
		 User.find({'interests.dogs.raza': breed},
		 			{'email': '*'}, (error, user) =>
		  {
		  	req = user;
		  });

		 setTimeout(
			() => req != 'undefined'
				? resolve(req)
				: reject(req),
			  1000
		  );

	})

}


function updateEmail(id) 
{
	return new Promise(function(resolve, reject)
	{
		let update = 
		{
			Emailverify: true
		};
		var req;
		 User.findByIdAndUpdate(id, update, (error, user) =>
		  {
		  	req = user;
		  });

		 setTimeout(
			() => req != 'undefined'
				? resolve(req)
				: reject(req),
			  1000
		  );

	})

}

module.exports = 
{
	getUser,
	getUsers,
	saveUser,
	updateUser,
	deleteUser,
	signIn,
	findUser,
	updateEmail,
	findEmail,
	casesDogStatus
}

const User = require('../model/user');
const services = require('../services/auth');
const Adopt = require('../model/adopt');
const mailer = require('./mailerCtrl');
// const session = require('../services/sessions.js');
// const sessions = require('../src/appServices/sessions.js');