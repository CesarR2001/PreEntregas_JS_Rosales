const ML_API=`https://api.mercadolibre.com/sites/MLA/search?q=audiculares&limit=9`

fetch(ML_API)
.then((data)=>data.json())
.then((resp)=>{
    array=resp
    productosMELI(array)
})

// Selecciona el contenedor de la grilla
const grillaA = document.querySelector('#audiculares__grilla');

const productosMELI = (productos) =>{

    productos.results.map((prod)=>{
    const contenedor = document.createElement('div');
    contenedor.classList.add('product__container');

    contenedor.innerHTML = `
        <h3>${prod.title}</h3>
        <img src=${prod.thumbnail} alt="${prod.title}">
        <p>Precio: $ ${prod.price}</p> 
        <button data="id"(${prod.id})"> Agregar</button>         `
        contenedor.querySelector('button').addEventListener('click', () => agregarProductoA(prod.id,productos));

        grillaA.appendChild(contenedor);
})
} 

 // Función para agregar productos al carrito
 function agregarProductoA(prodId,audicualres) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const audicular = audicualres.results.find(a => a.id === prodId);
    
    if (audicular) {
        carrito.push(audicular);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
    }
}


// Selecciona el contenedor de la grilla
const grilla = document.querySelector('#celulares__grilla');

// Función para crear un contenedor de producto
function crearProducto(celular) {
    const contenedor = document.createElement('div');
    contenedor.classList.add('product__container');

    contenedor.innerHTML = `
        <h3>${celular.title}</h3>
        <img src="${celular.img}" alt="${celular.title}">
        <p>${celular.descripcion}</p>
        <p>Precio: $ ${celular.price}</p> 
        <button data="id"(${celular.id})"> Agregar</button>
        `;
        contenedor.querySelector('button').addEventListener('click', () => agregarProducto(celular.id));

        return contenedor;
}


// Agregar productos a la grilla
Celulares.forEach(celular => {
    const productoElemento = crearProducto(celular);
    grilla.appendChild(productoElemento);
});


        // Función para agregar productos al carrito
        function agregarProducto(celularId) {
            const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            const celular = Celulares.find(c => c.id === celularId);
            
            if (celular) {
                carrito.push(celular);
                localStorage.setItem('carrito', JSON.stringify(carrito));
                mostrarCarrito();
            }
        }
        
        // Función para mostrar productos en el carrito
        function mostrarCarrito() {
            const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            const carritoElemento = document.getElementById('cart');
            carritoElemento.innerHTML = ''; // Limpiar carrito actual
            let total=0;
            carrito.forEach((item, index) => {
                const itemElemento = document.createElement('div');
                itemElemento.innerHTML = `
                    <span>${item.title} - $ ${item.price}</span>
                    <button onclick="eliminarProducto(${index})">Eliminar</button>
                `;
                carritoElemento.appendChild(itemElemento);
                total+=item.price;
            });

                // Mostrar el total
                document.getElementById('total').textContent = `Total: $${total}`;
        }
        
        // Función para eliminar productos del carrito
        function eliminarProducto(index) {
            const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.splice(index, 1);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            mostrarCarrito();
        }

        mostrarCarrito()



