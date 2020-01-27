'use strict';


function getLasDog(breed, token)
{

	return new Promise(function(resolve, reject)
	{
    let status;
    let dogsInterest;
		fetch('/api/notice/user/doginterest', {
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': token
          },
          body: JSON.stringify({breed: breed})
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

function getSessionInfo()
{

  return new Promise(function(resolve, reject)
  {
    let status;
    fetch('/api/session/2', {
          method: 'GET',
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

function getToken()
{

  return new Promise(function(resolve, reject)
  {
    let status;
    fetch('/api/session/1', {
          method: 'GET',
        }).then(response => 
        { 
          console.log("responsetoken arriba : ", response )
          status = response.status;
          return response.json();
        })
        .then((responseJSon) =>
        {
          console.log("responsetoken: "+responseJSon )
          resolve([status, responseJSon])
        })
          .catch((error) => 
            {
              console.log('error getToken', error);
               reject(error);
            })
  })
}

function getId()
{

  return new Promise(function(resolve, reject)
  {
    let status;
    fetch('/api/session/4', {
          method: 'GET',
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

// import LocalStorage from "node-localstorage";

module.exports = 
{
	getLasDog,
  getSessionInfo,
  getToken,
  getId,
}