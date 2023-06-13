var usuarios = []

//**REGISTER**
//1 - Seleccionnar elementos
var registerUserName = document.getElementById('registerUserName');
var registerUserLastName = document.getElementById('registerUserLastName');
var registerUserEmail = document.getElementById('registerUserEmail');
var registerUserPassword = document.getElementById('registerUserPassword');
var termsAndCondChek = document.getElementById('termsAndCondChek');
var registerButton = document.getElementById('registerButton');
var termsAndConditions = document.getElementById('termsAndConditions');
//2 - Capturar info cuando se hace click
//2a - Validaciones de datos
//2b - check de acepto terminos y condiciones
//2c - Guardar info en array "usuarios"
registerButton.addEventListener('click', function(){
    var userName = registerUserName.value;
    var userLastName = registerUserLastName.value;
    var userEmail = registerUserEmail.value;
    var userPassword = registerUserPassword.value;
  
    var usuario = {
        name: userName,
        lastName: userLastName,
        email: userEmail,
        password: userPassword,
    }
    
    usuarios.push(usuario)
})


