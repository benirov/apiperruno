'use strict';

const express = require('express');

const userCtrl = require('../controller/userController');
const dogCtrl = require('../controller/dogController');
const adoptCtrl = require('../controller/adoptController');
const EmailCtrl = require('../controller/mailerCtrl');
const sessionCtrl = require('../controller/sessionCtrl');

const isAuth = require('../middleware/auth');

const api = express.Router();

/*  Routes of user with api */

api.get('/users', userCtrl.getUsers);

api.get('/user/:id', isAuth, userCtrl.getUser);

api.post('/user', userCtrl.saveUser);

api.put('/user/:id', userCtrl.updateUser);

api.delete('/user/:id', userCtrl.deleteUser);

api.post('/signIn', userCtrl.signIn);

/*  Relataion user with dogs*/
// api.post('/user/viewdogstatus', dogCtrl.DogStatus);
api.get('/user/cases/:idDog', userCtrl.casesDogStatus);

api.put('/user/cases/:idDog', adoptCtrl.aprovedCase);


/*  Routes of dog with api */

api.get('/dogs', dogCtrl.getDogs);

api.get('/dog/:id', dogCtrl.getDog);

api.post('/dog', dogCtrl.saveDog);

api.put('/dog/:id', dogCtrl.updateDog);

api.delete('/dog/:id', dogCtrl.deleteDog);


/*  Routes of adopt with api */


api.get('/adopt', adoptCtrl.getListAdopt);

api.get('/adopt/:id', adoptCtrl.getAdopt);

api.post('/adopt', adoptCtrl.saveAdopt);

api.put('/adopt/:id', adoptCtrl.updateAdopt);

api.delete('/adopt/:id', adoptCtrl.deleteAdopt);


/*  Relataion user with dogs and adopt model*/
// api.post('/user/adopt', adoptCtrl.saveAdopt);

/*  Routes of sendMail with api */


api.post('/email', EmailCtrl.sendEmail);
api.get('/email/:token', EmailCtrl.verifyEmail);



/*  Routes of notices with api */

// generals

// last teen adoptes
api.get('/notice/adopt/getlast', adoptCtrl.getLastAdopt);

// last most breeds adopte
api.get('/notice/dogs/topbreed', dogCtrl.dogsTopBreed);


// personal

// dogs on interese
api.post('/notice/user/doginterest', isAuth, dogCtrl.userDogsInterest);


// dogs in adopt of user: 0- in adopt, 1 in progress, 2- adopted
api.get('/notice/user/dogadopt/:id/:status', dogCtrl.userDogsAdopt);

// dogs adopte
api.get('/notice/user/adopt/:id', adoptCtrl.getUserAdopt);

// get and set sessions


api.get('/session/:typeSession', sessionCtrl.getSession);

api.post('/session', sessionCtrl.setSession);

module.exports = api;