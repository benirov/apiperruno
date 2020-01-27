'use strict';


function verifyEmail(breed, token)
{

	return new Promise(function(resolve, reject)
  {
    let status;
    fetch('/api/session/3', {
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

function formValidator(Form, callback)
{
  let boolRequire = true;
  var Expresiones =
        {

          RegID :
              {
                Reg :/^([JGV])([\-][0-9]{4,10})$/,
                Mensaje : "Debe cumplir el formato requerido Ej.: J-000000000"
              },
          RegID2:
              {
                Reg :/^([JGV])([0-9]{0,12})$/,
                Mensaje : "Debe cumplir el formato requerido Ej.: J000000000"

              },
          RegCI:
              {
                Reg :/^([VE])([\-])([0-9]{4,12})$/,
                Mensaje : "Debe cumplir el formato requerido Ej.: V-000000000"

              },

          RegDescrip:
              {
                Reg: /^([ A-Za-z0-9\.\,\-\&\(\)]{0,120})$/i,
                Mensaje : "La razon social o el Nombre no es valida"
              },

          RegDireccion:
              {
                Reg : /^([ A-Za-z0-9\.\,\-\Â°]{0,180})$/i,
                Mensaje : "La direcciÃ³n no es valida"
              },

          RegNombre:
              {
                Reg : /^([ A-Za-z]{0,60})$/i,
                Mensaje: "Este campo no admite caracteres especiales"
              },

          RegApellido:
              {
                Reg:/^([ A-Za-z]{0,60})$/i,
                Mensaje: "Este campo no admite caracteres especiales"
              },

          RegUsuario:
              {
                Reg :/^([ A-Za-z0-9]{0,20})$/i,
                Mensaje: "El usuario no es valido"
              },

          RegAlias:
              {
                Reg : /^([ A-Za-z0-9]{0,20})$/i,
                Mensaje: "Este campo no admite caracteres especiales"
              },

          RegTelef:
              {
                Reg : /^([0-9]{1,3})([0-9]{15})([0-9])$/,
                Mensaje: "El telefono no es valido. Este campo no admite caracteres especiales"
              },

          RegCorreo:
              {
                Reg : /^([A-Za-z0-9])([A-Za-z0-9_\-\.])+@([a-z0-9\-])+\.(([a-z0-9]{2,20})\.)?([a-z0-9]{2,20})$/,
                Mensaje: "El correo no es valido"
              },

          RegClave:
              {
                Reg :/^([ A-Za-z0-9]{0,20})$/,
                Mensaje: "La clave no es valida. Este campo no admite caracteres especiales"
              },

          RegNum:
              {
                Reg : /([0-9\,])/,
                Mensaje : "el numero no es valido"
              },

          RegNumsimple:
                {
                  Reg : /([0-9])/,
                  Mensaje: "el numero no es valido"
                },

          RegSerial:
                {
                  Reg : /^([0-9]{7})$/i,
                  Mensaje: "el Serial no es valido"
                },

          RegComentario :
                  {
                    Reg : /^([ A-Za-z0-9\.\,\-\&\(\)]{0,180})$/i,
                    Mensaje: "el comentario no es valido"
                  },

          RegCodigo :
                {
                  Reg : /^([ A-Za-z0-9]{0,30})$/,
                  Mensaje: "el codigo no es valido"
                },

          RegLicencia :
                {
                  Reg : /^([ A-Za-z0-9]{0,20})$/i,
                  Mensaje: "La licencia no es valida"
                },

          RegNumTran :
                {
                  Reg : /^([ A-Za-z0-9]{0,20})$/i,
                  Mensaje: "El numero de transacciÃ³n no es valido"
                },

          RegZonaPostal :
                  {
                    Reg : /([0-9]){0,10}$/,
                    Mensaje: "La zona postal no es valida"
                  },

          RegClaseSaint :
                  {
                    Reg : /^([ A-Za-z0-9]{0,10})$/,
                    Mensaje : "La clase no es valida"
                  },

          RegUserFTP :
                  {
                    Reg : /([ A-Za-z0-9\.\_\-\@]{0,30})$/i,
                    Mensaje : "nombre de usuario no es valido"
                  },

          RegNombreDominio :
                  {
                    Reg : /^([ A-Za-z0-9\.\@\-]{0,50})$/i,
                    Mensaje : "Nombre de dominio no es valido"
                  },

          RegCtaBancaria :
                  {
                    Reg : /^([0-9]{20})$/i,
                    Mensaje : "Numero de cuenta bancaria no es valido. debe poseer 20 digitos"

                  }
        };

  let formInputs = document.forms[Form];
  let formInputsRequire = formInputs.getElementsByClassName("require");
  Object.keys(formInputsRequire).forEach(function (key)
  {    
    // console.log(key)
    // console.log(formInputsRequire[key].getElementsByTagName("input")[0])
    if(formInputsRequire[key].getElementsByTagName("input")[0].value == '')
    {
      let id = formInputsRequire[key].getElementsByTagName("input")[0].id;
      let elementLabel = document.querySelector("label[for='"+id+"']");
      elementLabel.classList.add("required");
      boolRequire = false;
    }
  });

  callback(boolRequire);

}

module.exports = 
{
	verifyEmail,
  formValidator,
}