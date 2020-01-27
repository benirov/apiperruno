'use strict';

function getUser(user, password)
{
	return new Promise(function(resolve, reject)
	{
		fetch('/api/signIn', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: user, password: password})
        }).then((res) => 
        {
        	// console.log(res);

        	 resolve(res);	
        })
          .catch((error) => 
          	{
          		console.log(error);
          		 reject(error);
          	})
	})
}

module.exports = 
{
	getUser,
}