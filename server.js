'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const session =  require('express-session');
const cookeParser =  require('cookie-parser');

const app = express();

app.use(session({
		  secret: 'abc'+Math.random()*100000000000,
		  saveUninitialized: true,
		  resave: false
		}))

const api = require('./route');

app.use(bodyParser.urlencoded({extends: false})); 
app.use(bodyParser.json());
app.use(cookeParser());



app.use('/api', api);







mongoose.connect(config.db, (error, res) =>
{
	if (error)
	{
		return console.log(`Error al conectar con base de datos: ${error}`);
	}
	else
	{
		console.log("conexion stablecida");
		app.listen(config.port, ()=>
		{
			console.log(`API REST Corriendo en http://localhost:${config.port}`);
		})
	}
});