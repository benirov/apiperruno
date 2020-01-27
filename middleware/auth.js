'use strict';

const services = require('../services/auth');
const sessions = require('../services/sessions');

function isAuth(req, res, next)
{
	if(!req.headers.authorization)
	{
		return res.status(403).send({message: 'no tienes autorizaciòn'});
	}
		let tokenReq = `Bearer ${req.headers.authorization}`;
		const token = tokenReq.split(" ")[1];
    	services.decodeToken(token)
		  .then(response =>
		    {
		      req.user = response;
		      next();
		    })
		  .catch(response =>
		    {
		      res.status(response.status).send({message: response.message})
		    })
	
}

module.exports = isAuth