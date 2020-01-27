'use strict';

const Adopt = require('../model/adopt');
const User = require('./userController'); 
const Dog = require('./dogController');
const mailer = require('./mailerCtrl');

/*
	status 0: en proceso: 
	status 1: finalizado: 
	status 2: rechazado: 
*/

function getListAdopt(req, res)
{
	Adopt.find({}, (error, listAdopt) =>
	{
		if(error)
		{
			return res.status(500).send({message: `error al realizar la peticion: ${error}`});
		}
		else if(!listAdopt || listAdopt.length == 0)
		{
			return res.status(404).send({message: `No existen transacciones de adopciòn: ${error}`});	
		}
		else
		{
			return res.status(200).send({listAdopt});	
		}
	})
}

function getAdopt(req, res)
{
	let id =  req.params.id
	Adopt.find(id, (error, listAdopt) =>
	{
		if(error)
		{
			return res.status(500).send({message: `error al realizar la peticion: ${error}`});
		}
		else if(!listAdopt || listAdopt.length == 0)
		{
			return res.status(404).send({message: `No existen transacciones de adopciòn asociadas a ID: ${error}`});	
		}
		else
		{
			return res.status(200).send({listAdopt});	
		}
	})
}

function getUserAdopt(req, res)
{
	let id =  req.params.id
	Adopt.find({'idUserAdopt': id}, (error, listAdopt) =>
	{
		if(error)
		{
			return res.status(500).send({message: `error al realizar la peticion: ${error}`});
		}
		else if(!listAdopt || listAdopt.length == 0)
		{
			return res.status(404).send({message: `No existen transacciones de adopciòn asociadas a ID: ${error}`});	
		}
		else
		{
			return res.status(200).send({listAdopt});	
		}
	}).sort({'_id':-1});
}

function getLastAdopt(req, res)
{
	Adopt.find({}, (error, listAdopt) =>
	{
		if(error)
		{
			return res.status(500).send({message: `error al realizar la peticion: ${error}`});
		}
		else if(!listAdopt || listAdopt.length == 0)
		{
			return res.status(404).send({message: `No existen transacciones de adopciòn asociadas a ID: ${error}`});	
		}
		else
		{
			return res.status(200).send({listAdopt});	
		}
	}).sort({'dateAdopt':-1}).limit(10)
}


function saveAdopt(req, res)
{
	let adopt = new Adopt;
	adopt.idUserAdopt = req.body.idUserAdopt,
	adopt.idUserOfDog = req.body.idUserOfDog,
	adopt.idDog = req.body.idDog
	adopt.status = 0;
	User.findUser(adopt.idUserAdopt).then(responseUser =>
		{
			if(responseUser == undefined)
			{
				return res.status(500).send({message: `Id De usuario no existe en la base de datos`});
			}
			else
			{
				Dog.findDog(adopt.idDog).then(findDog =>
				{
					if(findDog == undefined)
					{
						return res.status(500).send({message: `Id De Mascota no existe en la base de datos`});
					}
					else
					{
						adopt.save(adopt, (error, adopt) =>
						{
							if(error)
							{
								return res.status(500).send({message: `Error al realizar la peticion: ${error}`});
							}
							else
							{
								res.status(200).send({message: `datos de adopciòn guardado: ${adopt}`});
								Dog.updateStatus(adopt.idDog, 1).then(dog =>
								{
									// console.log("dog actualizado: "+dog)
									if(dog == undefined)
									{
										return res.status(500).send({message: `Id De Mascota no existe en la base de datos`});
									}
									else
									{
										// return res.status(200).send({message: `Status De Mascota actualizada`});
										User.findUser(dog.id_User).then(findUser => 
										{
											// console.log(findUser)
											if(findUser == undefined)
											{
												return res.status(500).send({message: `Id De Usuario no existe en la base de datos`});
											}
											else
											{
												let destinyEmail = findUser.email;
												// console.log("destinyEmail: "+destinyEmail);
												mailer.buildEmail(3, dog, '',destinyEmail);
											}
										}).catch((err) =>
										{
											console.log("error: "+err)
											return res.status(500).send({message: `Error asociado a ID de Usuario`});
										});
									}
								}).catch((err) =>
								{
									console.log("err: "+err)
									return res.status(500).send({message: `Error asociado a ID de Mascota`});
								});

							}
						});
					}
					
				})
			}	
		}).catch((error) =>
		{
			console.log("error de usduario: "+error)
			return res.status(500).send({message: `Error asociado a ID de Usuario`});
		});
}

function updateAdopt(req, res)
{
	let dataAdopt = req.body;
	let id = req.params.id;

	Adopt.findByIdAndUpdate(id, dataAdopt, (error, adoptUpdate) =>
	{
		if(error)
		{
			res.status(500).send({message: `error al actualizar datos de adopciòn ${error}`});
		}
		else
		{
			res.status(200).send({message: `datos de adopciòn actualizados: ${adoptUpdate}`});
		}
	});
}

function deleteAdopt(req, res)
{
  let id = req.params.id;

  Adopt.findById(id, (error, adopt) =>
  {
    if(error)
    {
      res.status(500).send({message: `Error al eliminar adopciòn: ${error}`});
    }
    else
    {
      adopt.remove(err =>
        {
          if(err)
          {
            res.status(500).send({message: `Error al eliminar adopciòn: ${err}`});
          }
          else
          {
            res.status(200).send({message: `adopciòn  con id: ${id} eliminado`});
          }
        });
    }
  });

}


function aprovedCase(req, res)
{
	let idDog = req.params.idDog;
	let status = req.body.status;
	Adopt.findOneAndUpdate({'idDog': idDog}, {status: status}, (error, caseAproved) =>
	{
		console.log("caseAproved: "+caseAproved)
		console.log("error: "+error)
		if(error)
		{
			res.status(500).send({message: `Error al realizar la petición: ${error}`});
		}
		else
		{
			res.status(500).send({message: `operacion finiquitada: ${caseAproved}`});
			let estatusDog = 2;
			if(status == 2)
			{
				estatusDog = 0;
			}

				Dog.updateStatus(idDog, estatusDog).then(dogUpdate =>
				{
					if(dogUpdate === undefined)
					{
						res.status(500).send({message: `Error actualizando estatus de mascota`});
					}
					else
					{
						User.findUser(caseAproved.idUserAdopt).then(userAdopt =>
						{
							if(userAdopt === undefined)
							{
								res.status(500).send({message: `Error asociado a ID de Usuario`});
							}
							else
							{
								User.findUser(dogUpdate.id_User).then(userDog =>
								{
									if(userDog === undefined)
									{
										res.status(500).send({message: `Error actualizando estatus de mascota`});
									}
									else
									{
										let data = 
										{
											nameDog: dogUpdate.nameDog,
											email: [userAdopt.email],
											phone: userDog.phone,
											emailUser: userDog.email,
											userName: userDog.userName,
										}
										console.log(data)
										if(status == 1)
										{
											mailer.buildEmail(4, data, '',data.email);
										}
										else
										{
											// rechazado
											mailer.buildEmail(5, data, '',data.email);
										}
									}
								});
							}
						})
						
					}
				});
			}
			
		})
}

module.exports = 
{
	getListAdopt,
	getAdopt,
	getLastAdopt,
	getUserAdopt,
	saveAdopt,
	updateAdopt,
	deleteAdopt,
	aprovedCase
} 