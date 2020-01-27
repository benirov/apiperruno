'use strict';

function getDogs(req, res)
{
	Dog.find({}, (error, dog) =>
	{
		if(error)
		{
			return res.status(500).send({message: `Error al realizar la peticion: ${error}`});
		}
		else if(!dog || dog.length == 0)
		{
			return res.status(404).send({message: `No Exiten registro de mascotas: ${error}`});
		}
		else
		{
			return res.status(200).send({dog});
		}
	});
}


function getDog(req, res)
{
	let id = req.params.id;

	Dog.findById(id, (error, dog) =>
	{
		console.log(dog)
		if(error)
		{
			return res.status(500).send({message: `Error al realizar la peticion: ${error}`});
		}
		else if(!dog || dog == [] || dog.length == 0)
		{
			return res.status(404).send({message: `No Exite registro para id asociado: ${error}`});
		}
		else
		{
			return res.status(200).send({dog});
		}
	});
}

function dogsTopBreed(req, res)
{


	Dog.find({'status': 2},{'breed':'*'}, (error, dog) =>
	{
		if(error)
		{
			return res.status(500).send({message: `Error al realizar la peticion: ${error}`});
		}
		else if(!dog || dog == [] || dog.length == 0)
		{
			return res.status(404).send({message: `No Exite mascotas adoptadas: ${error}`});
		}
		else
		{
			return res.status(200).send({dog});
		}
	});
}

function userDogsAdopt(req, res)
{

	let id = req.params.id
	let status = req.params.status
	Dog.find({'id_User': id, 'status': status}, (error, dog) =>
	{
		console.log(dog)
		if(error)
		{
			return res.status(500).send({message: `Error al realizar la peticion: ${error}`});
		}
		else if(!dog || dog == [] || dog.length == 0)
		{
			return res.status(404).send({message: `No Exite mascotas adoptadas: ${error}`});
		}
		else
		{
			return res.status(200).send({dog});
		}
	});
}


function userDogsInterest(req, res)
{
 	let breed = req.body.breed; 
	Dog.find({'breed':  { "$in" : breed}}, (error, dog) =>
	{
		if(error)
		{
			return res.status(500).send({message: `Error al realizar la peticion: ${error}`});
		}
		else if(!dog || dog == [] || dog.length == 0)
		{
			return res.status(404).send({message: `No Exite mascotas con sus estandares de intereses: ${error}`});
		}
		else
		{
			return res.status(200).send({dog});
		}
	}).sort({'_id':-1});
}

function saveDog(req, res)
{
	let dog = new Dog;
	dog.nameDog = req.body.nameDog,
	dog.titleDog = req.body.titleDog,
	dog.breed = req.body.breed,
	dog.age = req.body.age,
	dog.status = req.body.status,
	dog.id_User = req.body.id_User,
	dog.description = req.body.description,
	dog.medicalInfo = JSON.parse(req.body.medicalInfo);
	User.findUser(dog.id_User).then(responseUser =>
		{
			if(responseUser == undefined)
			{
				return res.status(500).send({message: `Id De usuario no existe en la base de datos`});
			}
			else
			{
				dog.save(dog, (error, dog) =>
				{
					if(error)
					{
						return res.status(500).send({message: `Error al realizar la peticion: ${error}`});
					}
					else
					{
						res.status(200).send({message: `datos de mascota guardado: ${dog}`});
						User.findEmail(dog.breed).then((users) =>
						{
							if(users === undefined)
							{
								res.status(404).send({message: `usuario no encontrado`});
							}
							else
							{
								let destinyEmail = [];
								users.map((value, index, array) =>
								{
									destinyEmail.push(array[index].email)
								})
								console.log(destinyEmail);
								mailer.buildEmail(2, dog, '',destinyEmail);
							}
						}).catch((err) =>
						{
							console.log(err);
							res.status(404).send({message: `usuario no encontrado`});
						});
					}
				});
			}	
		}).catch(() =>
		{
			return res.status(500).send({message: `Error asociado a ID de Usuario`});
		});

	
}

function updateDog(req, res)
{
	let dataDog = req.body;
	let id = req.params.id;

	Dog.findByIdAndUpdate(id, dataDog, (error, dogUpdate) =>
	{
		if(error)
		{
			res.status(500).send({message: `error al actualizar datos de mascota ${error}`});
		}
		else
		{
			res.status(200).send({message: `datos de mascota actualizados: ${dogUpdate}`});
		}
	});
}


function deleteDog(req, res)
{
	let id = req.params.id;

	Dog.findById(id, (error, dog) =>
	{
		if(error)
		{
			res.status(500).send({message: `error al eliminar datos de mascota ${error}`});
		}
		else
		{
			dog.remove(err =>
        {
          if(err)
          {
            res.status(500).send({message: `Error al eliminar datos de mascota: ${err}`});
          }
          else
          {
            res.status(200).send({message: `mascota  con id: ${id} eliminado`});
          }
        });
		}
	});
}

function updateStatusDog(req, res)
{
		let update = 
		{
			status: req.body.status
		};
		let idDog = req.body.id;
		let idUser = req.body.idUser;
		 Dog.findByIdAndUpdate(id, update, (error, dogUpate) =>
		  {
		  	if(error)
			{
				return res.status(500).send({message: `Error al actualizar estatus de mascota`});
			}
			else
			{
				return res.status(200).send({message: 'status de mascota actualizado'});
				// status actualizado
				let data = 
				{
					idUserAdopt :  idUser,
					idUserOfDog :  idDog.id_User
				}
				adopt.saveAdopt(data);

				mailer.buildEmail(3, dogUpate, '',destinyEmail);
			}
		  });


}

function DogStatus(req, res)
{
	let idUser = req.body.id;
	Dog.find({'id_User': idUser}, (error, dogs) =>
	{
		if(error)
          {
            res.status(500).send({message: `Error obteniendo sus mscotas: ${error}`});
          }
          else if(dogs == '' || dogs == [] || dogs.length == 0) 
          {
            res.status(404).send({message: `no tiene mascotas asociadas: ${error}`});
          }
          else
          {
          	return res.status(200).send({dogs})
          }

	});
}

function findDog(id)
{
	return new Promise(function(resolve, reject)
	{
		var req;
		 Dog.findById(id, (error, dog) =>
		  {
		  	req = dog;
		  });

		 setTimeout(
			() => req != 'undefined'
				? resolve(req)
				: reject(req),
			  1000
		  );

	})

}

function updateStatus(id, status)
{
	return new Promise(function(resolve, reject)
	{
		 let update = 
		{
			status: status
		};
		var req;
		 Dog.findByIdAndUpdate(id, update,  (error, dog) =>
		  {
		  	req = dog;

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
	getDog,
	getDogs,
	userDogsAdopt,
	dogsTopBreed,
	saveDog,
	userDogsInterest,
	updateDog,
	deleteDog,
	findDog,
	DogStatus,
	updateStatusDog,
	updateStatus
}

const Dog = require('../model/dog');
const User = require('./userController');
const mailer = require('./mailerCtrl');
const adopt = require('./adoptController');