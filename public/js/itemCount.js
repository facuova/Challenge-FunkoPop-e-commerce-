const plus = document.querySelector('#plus');
const subtract = document.querySelector('#subtract');
const cantidad = document.querySelector('#cantidad');

plus.addEventListener('click', () => cantidad.value = Number(cantidad.value) + 1);
subtract.addEventListener('click', () => {
    if (Number(cantidad.value) > 0) {
        cantidad.value = Number(cantidad.value) - 1    
    };
});