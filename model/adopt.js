'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const adoptDog = schema
(
	{
		idUserAdopt:
		{
			type: String,
			index: true
		},
		idUserOfDog:
		{
			type: String,
			index: true
		},
		idDog:
		{
			type: String,
			index: true
		},
		dateAdopt:
		{
			type: Date,
			default: Date.now()
		},
		status: String
	}
);

module.exports = mongoose.model('Adopt', adoptDog);