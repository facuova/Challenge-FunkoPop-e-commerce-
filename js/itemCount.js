const plus = document.querySelector('#button-plus');
const subtract = document.querySelector('#button-subtract');
const cantidad = document.querySelector('#cantidad');

plus.addEventListener('click', () => cantidad.value = Number(cantidad.value) + 1);
subtract.addEventListener('click', () => {
    if (Number(cantidad.value) > 0) {
        cantidad.value = Number(cantidad.value) - 1    
    };
});