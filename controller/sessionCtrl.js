'use strict';

function setSession(req, res)
{
	switch(req.body.typeSession)
	{
		case 1:
				req.session.tokenIdUser = req.body.value;
				req.session.save();
		break;
		case 2:
				req.session.breedUser = req.body.value;
				req.session.save();
		break;

		case 3:
				req.session.emailVerify = req.body.value;
				req.session.save();
		break;

		case 4:
				req.session.user = req.body.value;
				req.session.save();
		break;
	}

	return res.status(200).send({message: 'save session'});

}

function getSession(req, res)
{
	let response;

	switch(Number(req.params.typeSession))
	{
		case 1:		
				response = req.session.tokenIdUser;
		break;
		case 2:
				response = req.session.breedUser;
		break;

		case 3:
				response = req.session.emailVerify;
		break;

		case 4:
				response = req.session.user;
		break;
	}

	return res.status(200).send({message: response});
}

module.exports = 
{
	getSession,
	setSession,
} 