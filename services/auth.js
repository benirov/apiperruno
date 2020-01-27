'use strict';

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

function createToken(user)
{
	const payLoad = 
	{
		sub: user._id,
		ia: moment().unix(),
    exp: moment().add(14, 'days').unix()
	};

	return jwt.encode(payLoad, config.SECRET_TOKEN);
}

function decodeToken(token)
{
  return new Promise((resolve, reject) =>
  {
    setTimeout(() =>
    {
      try
      {
        const payLoad = jwt.decode(token, config.SECRET_TOKEN);
        console.log(payLoad)
        if(payLoad.exp <= moment().unix())
        {


          reject({
            status: 401,
            message: 'El token ha expirado'
          })
        }
        resolve(payLoad.sub)

      }catch(e)
      {

        reject(
          {
            status: 500,
            message: 'Token invalido',
            error: e
          })
      }
    }), 1000
  });
}

module.exports =  
{
	createToken,
	decodeToken
}