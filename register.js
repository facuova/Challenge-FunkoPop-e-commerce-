
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
//2a - check de acepto terminos y condiciones
registerButton.addEventListener('click', function(){
  var userName = registerUserName.value;
  var userLastName = registerUserLastName.value;
  var userEmail = registerUserEmail.value;
  var userPassword = registerUserPassword.value;
  console.log(userName);
  console.log(userLastName);
  console.log(userEmail);
  console.log(userPassword);
})
//3 - Validaciones de datos
//4 - Guardar info en array "usuarios"
