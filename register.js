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
registerButton.addEventListener('click', function(){
    var termsAndCond = termsAndCondChek.checked
    var userName = registerUserName.value;
    var userLastName = registerUserLastName.value;
    var userEmail = registerUserEmail.value;
    var userPassword = registerUserPassword.value;
    //2a - Validaciones de datos
    
    //2c - Guardar info en objeto "usuario" 
    var usuario = {
        name: userName,
        lastName: userLastName,
        email: userEmail,
        password: userPassword,
    }
    //2b - check de acepto terminos y condiciones
    if (termsAndCond) {
        //Guardar objeto "usuario" en array "usuarios"
        usuarios.push(usuario)
        //Simular envio de datos. Se guardan en el lcaol storage usuarios
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
    else {
        alert('Debe aceptar términos y condiciones')
    }    
})


