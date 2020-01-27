'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto');
const MongooseTrigger = require('mongoose-trigger');

const userModel = schema
(
	{
		userName: String,
		email:
		{
			type: String,
			validate: 
			{
				validator: (v) =>
				{
					return /^([A-Za-z0-9])([A-Za-z0-9_\-\.])+@([a-z0-9\-])+\.(([a-z0-9]{2,20})\.)?([a-z0-9]{2,20})$/.test(v);
				},
				message: props => `${props.value} no es un correo valido`
			},
			
		},
		password: 
		{
			type: String,
			validate: 
			{
				validator: (v) =>
				{
					return /^([ A-Za-z0-9]{0,20})$/.test(v);
				},
				message: props => `${props.value} no es una clave valida`
			},
			require: [true, "clave es requerido"]
		},
		passwordHas: 
		{
			type: String
		},
		signupDate : 
		{
			type: Date, default: Date.now()
		},
		lastLogin: Date,
		interests:
		{
			type: Object,
			followEmails: Boolean,
			dogs:
			{
				raza: Array,
				age: Number
			},
		},
		phone: 
			{
				type: String,
				validate: 
				{
					validator: (v) =>
					{
						return /^([0-9]{1,3})([0-9]{8,15})([0-9])$/.test(v);
					},
					message: props => `${props.value} no es un numero telefonico valido`
				},
			},
		imgProfile: String,
		Emailverify: Boolean
	}
);

userModel.pre('save', function(next)
{
	let user = this;
	if(!user.isModified('password'))
	{
		return next();
	}
	else
	{
		bcrypt.genSalt(10, (error, salt) =>
		{
			if(error)
			{
				return next();
			}
			else
			{
				bcrypt.hash(user.passwordHas, salt, null, (error, hash) =>
				{
					if (error)
					{
						return next();
					}
					else
					{
						user.passwordHas = hash;
						next();
					}
				})
			}
		})
	}
});

const userModelEvents = MongooseTrigger(userModel, {
  events: {
    create: {
      select: 'userName email'
    },
    remove: false
  },
  partials: [
    {
      eventName: 'custom_event',
      triggers: 'name',
      select: 'breed email'
    }
  ],
  debug: false
});

userModelEvents.on('create', data => console.log("data"));

module.exports = mongoose.model('User', userModel);