'use strict';


function getInfoUser(token, id)
{
  console.log(id)
	return new Promise(function(resolve, reject)
	{
    let status;
		fetch('/api/user/'+id, {
          method: 'GET',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': token
          },
        }).then(response => 
        {
          status = response.status;
          return response.json();
        })
        .then((responseJSon) =>
        {
          resolve([status, responseJSon])
        })
          .catch((error) => 
          	{
          		console.log(error);
          		 reject(error);
          	})
	})
}

function updateUser(data, token)
{
  console.log(data);
  console.log('token', token);
  return new Promise(function(resolve, reject)
  {
    let status;
    fetch('/api/user/'+data.id, {
          method: 'PUT',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': token.message
          },
          body: JSON.stringify({
                                userName: data.userName,
                                email: data.email,
                                phone: data.phone,
                                password: data.password})
        }).then(response => 
        {
          console.log('status', response);
          status = response.status;
          return response.json();
        })
        .then((responseJSon) =>
        {
          console.log('responseJSon', responseJSon);
          resolve([status, responseJSon])
        })
          .catch((error) => 
            {
              console.log('responseJSon error', error);
               reject(error);
            })
  })

}

function createUser(data)
{
  console.log(data)
  return new Promise(function(resolve, reject)
  {
    let status;
    fetch('/api/user', {
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'authorization': token
          },
          body: JSON.stringify({
                                userName: data.userName,
                                email: data.email,
                                phone: data.phone,
                                password: data.password})
        }).then(response => 
        {
          console.log('response', response);
          status = response.status;
          return response.json();
        })
        .then((responseJSon) =>
        {
          resolve([status, responseJSon])
        })
          .catch((error) => 
            {
               reject(error);
            })
  })

}


// import LocalStorage from "node-localstorage";

module.exports = 
{
	getInfoUser,
  updateUser,
  createUser
}