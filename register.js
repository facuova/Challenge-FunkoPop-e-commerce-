var usuarios = []

//**REGISTER**
//1 - Seleccionnar elementos del formualrio de registro
//Variables generales
var registerUserName = document.getElementById('registerUserName');
var registerUserLastName = document.getElementById('registerUserLastName');
var registerUserEmail = document.getElementById('registerUserEmail');
var registerUserPassword = document.getElementById('registerUserPassword');
var termsAndCondChek = document.getElementById('termsAndCondChek');
var registerButton = document.getElementById('registerButton');
var termsAndConditions = document.getElementById('termsAndConditions');
//1 APELLIDO Y NOMBRE 
//2 - EMAIL - Capturar info cuando se hace click
registerButton.addEventListener('click', function(){
    var termsAndCond = termsAndCondChek.checked
    var userName = registerUserName.value;
    var userLastName = registerUserLastName.value;
    var userEmail = registerUserEmail.value;
    var userPassword = registerUserPassword.value;
    //2a - Validaciones de datos
    var emailValido = validarFormatoEmail(userEmail)
    var dominioValido = validarDominioEmail(userEmail, dominios)
    //2b - Crear objeto usuarios para almacenar valores del input 
    var usuario = {
        name: userName,
        lastName: userLastName,
        email: userEmail,
        password: userPassword,
    }
    console.log('llegue')
    //2c - Dominio y formato valido true
    if (emailValido && dominioValido) { 
        //2d - check de acepto terminos y condiciones true
        if (termsAndCond) {
            //Guardar objeto "usuario" en array "usuarios"
            console.log('Registro recibido')
            usuarios.push(usuario)
            //Simular envio de datos. Se guardan en el lcaol storage usuarios
            //console.log('Datos guardados en Local Storage')
            //localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }
        else {
            alert('Debe aceptar términos y condiciones')
        } 
    }
    else {
        alert('Formato de correo no válido')
    }       
})

//Validar el formato de email
var valCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

function validarFormatoEmail (dominio) {
    return valCorreo.test(dominio)
}

//Validar el dominio de email
var regexCom = /\.com$/;
var regexOrg = /\.org$/;
var regexNet = /\.net$/;
var regexEdu = /\.edu$/;
var regexGov = /\.gov$/;
var regexMil = /\.mil$/;

const dominios = [regexCom,regexOrg,regexNet,
    regexEdu,regexGov,regexMil] 
    
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


