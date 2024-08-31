/*Mi proyecto va ser la continuacion de mi tp de Desarroollo Web 
que era un e-ccomerse de venta de celulares y audicualres sobre eso voy a trabajar
ahora al principio voy a hacer ejemplos simples relacionados a lo que busco
*/ 

// Definir usuarios válidos
//En un futuro me gustaria tener una lista de usarios como si fuera una base de datos 
//y poder relacionar los datos de cada usuario para cuando realice una compra
const usuarioValido = 'CESAR';
const contrasenaValida = '12345678';

// Contador de intentos
let intentos = 0;
const maxIntentos = 3;

function cargardatos() {
    let nombre = prompt('Ingrese su usuario').toUpperCase(); // Convertir a mayúsculas para comparación
    let contrasena = prompt('Ingrese su contraseña:');
    return { nombre, contrasena }; // Devolver un objeto con ambos valores
}

// Función para manejar el login
function login() {
    while (intentos <= maxIntentos+1) {
        let { nombre: nombreIngresado, contrasena: contrasenaIngresada } = cargardatos(); // Obtener los valores

        // Verificar credenciales
        if (usuarioValido === nombreIngresado && contrasenaValida === contrasenaIngresada) {
            alert('Login exitoso. Bienvenido!');
            intentos = 0; // Reiniciar el contador de intentos
            return; // Salir de la función en caso de éxito
        } else {
            intentos++;
            if (intentos >= maxIntentos) {
                alert('Número máximo de intentos alcanzado. Por favor, inténtelo más tarde.');
                return; // Salir de la función en caso de límite de intentos
            } else {
                alert(`Nombre de usuario o contraseña incorrectos. Intento ${intentos} de ${maxIntentos}.`);
            }
        }
    }
}

// Iniciar el proceso de login
login()


// Algoritmo 2 Poder cargar tu pedido a un carrito 
/* Quiero mas adelante poder cargar una lista de productos que seran mostrados y segun el producto que se seleccione
añadirlo al carrito de compras para despues poder finalizar la compra
*/
//Por Ahora voy a mostrarlos los productos por alertas despues depende la opciones que le aparezca en pantalla el hara click en la que prefiera 
        // Definir productos individuales
        const producto1 = { id: 1, nombre: 'Samsung Galaxy S23', precio: 800 };
        alert(`Producto1: ${producto1.nombre} ${producto1.precio}`);
        const producto2 = { id: 2, nombre: 'iPhone 14', precio: 1000 };
        alert(`Producto1: ${producto2.nombre} ${producto2.precio}`);
        const producto3 = { id: 3, nombre: 'Google Pixel 7', precio: 700 };
        alert(`Producto1: ${producto3.nombre} ${producto3.precio}`);
        const producto4 = { id: 4, nombre: 'OnePlus 11', precio: 750 };
        alert(`Producto1: ${producto4.nombre} ${producto4.precio}`);

        let carrito = null;
        let total = 0;

        function agregarAlCarrito() {
            let producto;
            let id=Number(prompt('Elige el producto que desees'))
            switch (id) {
                case 1:
                    producto = producto1;
                    break;
                case 2:
                    producto = producto2;
                    break;
                case 3:
                    producto = producto3;
                    break;
                case 4:
                    producto = producto4;
                    break;
                default:
                    console.log('Producto no encontrado.');
                    return;
            }
            if (carrito === null) {
                carrito = producto;
            } else {
                console.log('El carrito ya tiene un producto.');
                return;
            }
            total = producto.precio;
            console.log(`Producto agregado al carrito: ${producto.nombre}`);
        }

        function mostrarCarrito() {
            if (carrito === null) {
                console.log('El carrito está vacío.');
            } else {
                console.log(`Producto en el carrito: ${carrito.nombre}, Precio: $${carrito.precio}`);
                console.log(`Total a pagar: $${total}`);
            }
        }
    
        agregarAlCarrito()
        mostrarCarrito()

//PRE ENTREGA 2
/*
En esta parte de la Pre entrega quiero crear la funcionalidad de que un encargado pueda cargar 
los productos nuevos que le lleguen tanto como celulares o audicular;
Solo los autorizados pueden entrar a esta funcionalidad.
Los usuarios se gurdaran en una base de datos y tendran una categoria cliente o encargado.  
*/
// CLASE CONSTRUCTORA PARA CREAR LOS OBJETOS 👇
class Celular{
    constructor(marca, precio, stock, gama) {
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
        this.gama = gama;
    }
}

class Audicular {
    constructor(marca, precio, stock, tipo) {
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
        this.tipo = tipo;
    }
}

class Usuario {
    constructor(nombre,contrasena, rol) {
        this.nombre = nombre;
        this.contrasena= contrasena;
        this.rol = rol; // Puede ser "cliente" o "encargado"
    }

    esEncargado() {
        return this.rol === "encargado";
    }
}

// Base de datos simulada
const celulares = [];
const audiculares=[];
const usuarios = [
    new Usuario('ana','ana1234', 'encargado'),
    new Usuario('luis','luis1234', 'cliente'),
    new Usuario('maría','maria1234', 'encargado')
]
/*DESPUES IMPLEMENTAREMOS EL LOGIN EN UNA MEJOR VERSION POR AHORA 
DECLARARE UN USARIO QUE SEA ENCARGADO  PARA EL EJEMPLO 
*/
const usuario =Usuario[0];

let consulta = prompt( "Desea cargar los productos nuevos?").toUpperCase();

while (consulta === "SI") {
    let opcion = prompt(" Que desea cargar Opcion 1 Celular o Opcion 2 Audicular") 
    if (!usuario.esEncargado()) {
        console.log('No tienes permisos para agregar productos.');
        consulta="NO";
        return;
    }
    else if(opcion=1){
        marca = prompt("Ingrese la marca del producto");
        precio = Number(prompt("Ingrese el precio del producto"));
        stock = Number(prompt("Ingrese el stock del producto"));
        gama = prompt("Ingrese la gama del producto: ALTA - MEDIA").toUpperCase();
        agregarCelular(marca, precio, stock, categoria)
    }
    else if(opcion=2)
        {
            marca = prompt("Ingrese la marca del producto");
            precio = Number(prompt("Ingrese el precio del producto"));
            stock = Number(prompt("Ingrese el stock del producto"));
            tipo = prompt("Ingrese el tipo del producto: ").toUpperCase();
            agregarAudicular(marca, precio, stock, categoria)
        }
    else{
        alert('Opcion Invalida');
    }
    consulta = prompt("Desea seguir agregando productos?").toUpperCase();
}

// 👇 FUNCIONALIDAD PARA CARGAR LOS CELULARES EN EL ARRAY 
const agregarCelular = (marca, precio, stock, gama) => {
    celulares.push(new Celular(marca, precio, stock, gama));
    console.log(celulares);
};
// 👇 FUNCIONALIDAD PARA CARGAR LOS AUDICULARES EN EL ARRAY 
const agregarAudicular = (marca, precio, stock, tipo) => {
    audiculares.push(new Audicular(marca, precio, stock, tipo));
    console.log(audiculares);
};



