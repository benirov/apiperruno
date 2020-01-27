'use strict';
const mongoose = require('mongoose');
const MongooseTrigger = require('mongoose-trigger');
const schema = mongoose.Schema;

const dogModel = schema
(
	{
		nameDog: String,
		titleDog: String,
		breed: 
		{
			type: String,
			index: true
		},
		age: String,
		status:{
			type: Number,
			require: [true, "status es requerido"]
		},
		id_User: 
		{
			type: String,
			require: [true, "el perro debe estar asociado a un usuario"],
			index: true

		},
		description: String,

		medicalInfo:
		{
			type: Object,
			vaccinations: Array,
			additionalInfo: String
		}
	}
);

const dogModelEvents = MongooseTrigger(dogModel, {
  events: {
    create: {
      select: 'breed nameDog titleDog description'
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

dogModelEvents.on('create', data => console.log("data dog"));

module.exports = mongoose.model('Dog', dogModel);