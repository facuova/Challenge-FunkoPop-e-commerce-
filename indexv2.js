var regexCom = /\.com$/;
var regexOrg = /\.org$/;

const dominiosValidacion = [regexCom,regexOrg] 

function validarDominio (emailf, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].test(emailf)) {
      console.log("El dominio es válido: " + emailf);
      break; // Terminar el bucle si se encuentra una coincidencia
    }
  }
}

if (valCom === false){
  alert('Email inválido. Por favor, ingrese email válido.');
  valOrg = false
  return false;
}

if (valOrg === false){
  alert('Email inválido. Por favor, ingrese email válido.');
  valCom = false
  return false;
}