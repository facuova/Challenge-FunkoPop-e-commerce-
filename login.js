usuarios = [
    {
    name: 'facundo',
    email: 'holamanola@gmail.com',
    password: 'hola123',
    }
]


//**LOGIN**   
//1 - Seleccionnar elementos
var emailInput = document.getElementById('userEmailInput');
var passwordInput = document.getElementById('userPasswordlInput');
var loginButton = document.getElementById('loginButton');
var remindMeInput = document.getElementById('remindMe');
var forgotPassword = document.getElementById('forgotPassword');


//2 - Capturar info cuando se hace click
loginButton.addEventListener('click', function() {
    var email = emailInput.value;
    var password = passwordInput.value;
    validarCampos(email, password);
    //2.a- Boton de recordarme - guardar datos en localstorage 
    var remindMe = remindMeInput.checked
    if (remindMe) {
      localStorage.setItem('Usuario:', email);
      localStorage.setItem('Contraseña:',password);
    } 
});

//3- comparar usuario y password que viene en el input contra el array de usuarios y devolver true o false si 
//usuario y password son correctos

//var regexCom = /\.com$/;
//var regexOrg = /\.org$/;
//const dominiosValidacion = [regexCom,regexOrg] 

function validarCampos(email, password) {
  if (email === '') {
    alert('Campo vacio. Por favor, ingrese email.');
    return false;
  }
    
  if (password === '') {
    alert('Campo vacio. Por favor, ingrese password.');
    return false;
  }

  if (email !== usuarios[0].email & password === usuarios[0].password || 
    email === usuarios[0].email & password !== usuarios[0].password ) {
    alert('Email o password inválidos.');
    return false;  
  }
  // Los campos son válidos
  if (email === usuarios[0].email & password === usuarios[0].password ) {
    window.location.href = "/pages/create.html";
    return true;  
  }  
}

//4- Boton de restablecer contraseña - hacer un prompt para que el usuario pueda cargar su email
forgotPassword.addEventListener('click', () => {
  prompt('Ingresar correo registrado para recibir código de autenticación')
})

console.log('Si yo aparezco, llegaste al final')