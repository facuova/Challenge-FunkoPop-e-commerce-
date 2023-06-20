usuarios = [
    {
    name: 'Facundo',
    lastName: 'Ovalles',
    email: 'admin@funkos.com',
    password: 'hola123',
    userType: 'admin',
    }
]

//**LOGIN**   
//1 - Seleccionnar elementos
let userEmailForm = document.getElementById('userEmailForm');
let emailInput = document.getElementById('userEmailInput');
let passwordInput = document.getElementById('userPasswordlInput');
let loginButton = document.getElementById('loginButton');
let remindMeInput = document.getElementById('remindMe');
let forgotPassword = document.getElementById('forgotPassword');

//2 - Capturar info cuando se hace click
loginButton.addEventListener('click', function() {
    var email = emailInput.value;
    var password = passwordInput.value;
    //2.a Validar datos
    validarData(email, password);
    //2.b- Boton de recordarme - guardar datos en localstorage 
    var remindMe = remindMeInput.checked
    if (remindMe) {
      localStorage.setItem('Usuario:', email);
      localStorage.setItem('Contraseña:',password);
    } 
});

//3- comparar usuario y password que viene en el input contra el array de usuarios y devolver true o false si 
//usuario y password son correctos
function validarData(email, password) {
  if (email === '') {
    var emailError = document.getElementById('emailError');
    if (!emailError) {
      //Creo el elemento que voy a agregar
      var emailError = document.createElement('span');
      //Le agrego un id para hacer la verificación
      emailError.id = 'emailError';
      //Le agrego una clase para darle formato
      emailError.className = 'error-message';
      //Al elemento que cree, le agrego el contenido
      emailError.innerHTML = 'Campo vacío. Por favor, ingrese email.';
      //Lo agrego en el elemento padre seleccionado
      userEmailForm.parentNode.insertBefore(emailError, userEmailForm.nextSibling);
    }
    return false;
  }  
  
  else if (password === '') {
    var passError = document.getElementById('passError');
    if (!passError) {
      var passError = document.createElement('span');
      passError.id = 'passError';
      passError.className = 'error-message';
      passError.innerHTML = 'Campo vacío. Por favor, ingrese password.';
      var userPassForm = document.getElementById('userPassForm');
      userPassForm.parentNode.appendChild(passError);
    }
    return false;
  }

  else if (email !== usuarios[0].email & password === usuarios[0].password || 
    email === usuarios[0].email & password !== usuarios[0].password || email !== usuarios[0].email & password !== usuarios[0].password) {
    alert('Email o password inválidos.');
    return false;  
  }
  // Los campos son válidos
  else if (email === usuarios[0].email & password === usuarios[0].password ) {
     var usuarioValido = true;
     console.log(usuarioValido)
      if (usuarioValido) { 
        window.location.href = "/pages/admin.html";
      }
    return true;  
  } 
}

//4- Boton de restablecer contraseña - hacer un prompt para que el usuario pueda cargar su email
forgotPassword.addEventListener('click', () => {
  prompt('Ingresar correo registrado para recibir código de autenticación')
})

//Borrado de mensaje de error cuando se hace click nuevamente en el formulario
//Este es del email
userEmailForm.addEventListener('click', function() {
  var emailError = document.getElementById('emailError');
  if (emailError) {
    emailError.remove();
  }
});
//Este es del password
userPassForm.addEventListener('click', function() {
  var passError = document.getElementById('passError');
  if (passError) {
    passError.remove();
  }
});