'use strict';

const session =  require('express-session');

function setSession(nameSession, value)
{
	try
	{
		session.nameSession = value;
	 	session.save();
	 	return true;
	}catch(e)
	{
		return false;
	}

}

function getSession(nameSession)
{
	
	let response;

	switch(req.params.typeSession)
	{
		case 1:
				
				response = session.tokenIdUser;
		break;
		case 2:
				response = session.breedUser;
		break;
	}

	console.log('sessio controller', response);

	return response;
}

module.exports = 
{
	setSession,
	getSession
}