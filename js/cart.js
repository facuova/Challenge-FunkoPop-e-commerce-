const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});


const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');
const productList = document.querySelector('.item-container');

//Varible de arreglos de productos
let allProducts = []
const valorTotal = document.querySelector('.total-pagar')
const countProducts = document.querySelector('#contador-productos')
const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productList.addEventListener('click', (e) => {
    if (e.target.classList.contains('login-buttom-item')){
      const product = e.target.parentElement
      console.log(product)
      const infoProduct = {
        cantidad: document.getElementById('cantidad').value,
        nombre: product.querySelector('.item-article-title').textContent,
        precio: product.querySelector('.item-article-price').textContent,
      }
    
      const exist = allProducts.some(product => product.nombre === infoProduct.nombre)

      if (exist) {
        const products = allProducts.map(product => {
          if(product.nombre === infoProduct.nombre){
            product.cantidad = Number(product.cantidad) + Number(infoProduct.cantidad);
            console.log(product.cantidad)
            return product
          } else {
            return product
          };
        });
        allProducts = [...products]
      } else {
        allProducts = [...allProducts, infoProduct]
      };

    showCartHTML();

    };
});

//Funcion eliminar producto de carrito

rowProduct.addEventListener('click', (e)=> {
  if(e.target.classList.contains('icon-close')){
    const product = e.target.parentElement;
    const nombre = product.querySelector('.titulo-producto-carrito').textContent;

    allProducts = allProducts.filter(product => product.nombre !== nombre)
    showCartHTML();
  }
})

//Función para mostrar html
const showCartHTML = () => {
  

  if(!allProducts.length){
    cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
  } else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	};

  //Limpiar HTML 
  rowProduct.innerHTML = ``;

  let total = 0;
  let totalProducts = 0;
  
  allProducts.forEach(product => {
    
    const cartContainerProduct = document.createElement('div');
    cartContainerProduct.classList.add('cart-product');
    cartContainerProduct.innerHTML = `
        <div class="info-cart-product">
            <span class="cantidad-producto-carrito">${product.cantidad}</span>
            <p class="titulo-producto-carrito">${product.nombre}</p>
            <span class="precio-producto-carrito">${product.precio}</span>
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon-close"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
      `;
    rowProduct.append(cartContainerProduct);
    
    total = total + parseFloat(product.cantidad) * parseFloat(product.precio.slice(1));
    totalProducts = totalProducts + parseFloat(product.cantidad);
  });
  valorTotal.innerText = `$${total}`;
  countProducts.innerText = totalProducts;
};
  
