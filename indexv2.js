//Método validación de dominión nuevo
var formatoEmailvalido = false
var pruebaFormato  = dominios.some(function(elemento) {  
    formatoEmailvalido =  elemento.test(formato2);   
    return formatoEmailvalido
});

if (formatoEmailvalido) {
    console.log(formato)
} 
else{
    console.log(formato)
    alert('Dominio nó valido')
}



var formato = "example@example.com";

var pruebaFormato = dominios.some(function(elemento) {
  return elemento.test(formato);
});

console.log(pruebaFormato);









