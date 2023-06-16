var usuarios = []
var prueba = 'susanahoria@gmail.com'
var prueb2 = 'susanahoria@gmail.xxx'
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

//2 Capturar data, validar y guardarla en el local storage cuando se hace click
registerButton.addEventListener('click', function(){

  var termsAndCond = termsAndCondChek.checked
  var userName = registerUserName.value;
  var userLastName = registerUserLastName.value;
  var userEmail = registerUserEmail.value;
  var userPassword = registerUserPassword.value;
  var userConfirmPass = registerUserConfirmPass.value; 

  //2a - Crear objeto usuarios para almacenar valores del input  
  var usuario = {name: userName, lastName: userLastName, email: userEmail, password: userPassword,}
  
  //2b - Validaciones de datos
  var formatoNameValido = validarFormatoNombre(userName);
  var formatoLastNameValido = validarFormatoApellido(userLastName)
  var formatoEmailValido = validarFormatoEmail(userEmail);
  var dominioEmailValido = validarDominioEmail(userEmail, dominios);
  var formatoPassValido = validarFormatoPass(userPassword)
  
  //2c - Mensajes de errores antes validaciones erróneas 
  if (formatoNameValido === false || userName === '') {
    alert('Por favor ingrese un Nombre válido')
  }
  else if (formatoLastNameValido === false || userLastName === '') {
    alert('Por favor ingrese un Apellido válido')
  }
  else if (formatoEmailValido === false){
    alert('Formato de email no válido')
  }
  else if (dominioEmailValido === false){
    alert('Dominio de email no válido')
  }
  else if (formatoPassValido === false){
    alert('Contraseña no válido')
  }
  
  else if (userPassword !== userConfirmPass){
    alert('Contraseña y Repita Contraseña deben coincidir')
  }
  //Si los datos con correctos
  else {
    //2d - Validar check de térimnos y condiciones
    if (termsAndCond) {
        //2e - Guardar objeto "usuario" en array "usuarios"
        console.log('Registro recibido', usuario);
        usuarios.push(usuario);
        //2f - Simular envio de datos. Se guardan en el local storage usuarios.
        //console.log('Datos guardados en Local Storage')
        //localStorage.setItem('usuarios', JSON.stringify(usuarios));
      }
      else {
        alert('Debe aceptar términos y condiciones');
      } 
  }         
})

//Métodos validar Nombre y Apellido 
var regexNombreApellido = /^[a-zA-ZÀ-ÿ\s]{1,40}$/ 

function validarFormatoNombre (nombre) {
    return regexNombreApellido.test(nombre);    
}

function validarFormatoApellido (apellido) {
    return regexNombreApellido.test(apellido);
}

//Método validar el formato del email
var regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

function validarFormatoEmail (dominio) {
    return regexEmail.test(dominio);  
}

//Método validar el dominio de email
var regexCom = /\.com$/;
var regexOrg = /\.org$/;
var regexNet = /\.net$/;
var regexEdu = /\.edu$/;
var regexGov = /\.gov$/;
var regexMil = /\.mil$/;
const dominios = [regexCom,regexOrg,regexNet,regexEdu,regexGov,regexMil] 
    
function validarDominioEmail (correo, lista) {
    var formatoEmailvalido = dominios.some(function(elemento) {  
        formatoEmailvalido =  elemento.test(correo);   
        return formatoEmailvalido
    });
    return formatoEmailvalido
}

//Método validar el password de email
var regexPass = /^.{7,20}$/;
//var regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/ // Este lo vamos a usar más adelante
function validarFormatoPass (pass) {
    return regexPass.test(pass);  
}

//Método para ver términos y condiciones
var termsAndConditionsLink = document.getElementById('termsAndConditions');
var popup = document.getElementById('popup');
var closePopupButton = document.getElementById('closePopup');

termsAndConditionsLink.addEventListener('click', function(event) {
  event.preventDefault();
  popup.style.display = 'flex'; // Mostrar el popup al cambiar la propiedad 'display' a 'flex'
});

closePopupButton.addEventListener('click', function() {
  popup.style.display = 'none'; // Ocultar el popup al cambiar la propiedad 'display' a 'none'
});