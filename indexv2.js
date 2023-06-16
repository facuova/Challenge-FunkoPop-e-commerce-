

var prueba = 'facuovalles@gmail.com'
var prueba2 = 'facuovalles@gmail.gov'
var prueba3 = 'holatodobien.ar'

var regexCom = /\.com$/;
var regexOrg = /\.org$/;
var regexNet = /\.net$/;
var regexEdu = /\.edu$/;
var regexGov = /\.gov$/;
var regexMil = /\.mil$/;
var valCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

const dominios = [regexCom,regexOrg,regexNet,
regexEdu,regexGov,regexMil] 

function validarFormatoEmail (dominio) {
  return valCorreo.test(dominio)
}

function validarDominioEmail (dominio, lista) {
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].test(dominio))  {
      console.log("El dominio es válido: " + dominio);
      break; // Terminar el bucle si se encuentra una coincidencia
    } 
    else {
      console.log("El dominio no es válido: " + dominio);
      return false;
    }  
  }  
}

var usuario = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ // EMAIL VALIDO
var nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // Letras y espacios, pueden llevar acentos.
var password = /^.{7,20}$/ // 7 a 20 digitos.
