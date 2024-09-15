

// Selecciona el contenedor de la grilla
const grilla = document.querySelector('.product__grilla');

// Función para crear un contenedor de producto
function crearProducto(celular) {
    const contenedor = document.createElement('div');
    contenedor.classList.add('product__container');

    contenedor.innerHTML = `
        <h3>${celular.nombre}</h3>
        <img src="${celular.img}" alt="${celular.nombre}">
        <p>${celular.descripcion}</p>
        <p>Precio: $ ${celular.precio}</p> 
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
                    <span>${item.nombre} - $ ${item.precio}</span>
                    <button onclick="eliminarProducto(${index})">Eliminar</button>
                `;
                carritoElemento.appendChild(itemElemento);
                total+=item.precio;
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