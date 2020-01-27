'use strict';

const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

function setSession(name, value)
{
	localStorage.setItem(name, value)
}

function getSession(name)
{
	return localStorage.getItem(name)
}

module.exports = 
{
	setSession,
	getSession
}