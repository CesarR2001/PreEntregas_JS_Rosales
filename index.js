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
const usuarios = [
    new Usuario('ana','ana1234', 'encargado'),
    new Usuario('luis','luis1234', 'cliente'),
    new Usuario('maría','maria1234', 'encargado')
];

const celulares = [
    // Ejemplos de celulares
    new Celular('Samsung Galaxy S21', 799.99, 50, 'ALTA'),
    new Celular('iPhone 13', 999.99, 30, 'ALTA'),
    new Celular('Google Pixel 6', 599.99, 20, 'MEDIA'),
]
const audiculares=[
    // Ejemplos de audiculares
    new Audicular('Sony WH-1000XM4', 349.99, 40, 'OVER-EAR'),
    new Audicular('Bose QuietComfort 35 II', 299.99, 25, 'OVER-EAR'),
    new Audicular('Apple AirPods Pro', 249.99, 50, 'IN-EAR')
];
/*DESPUES IMPLEMENTAREMOS EL LOGIN EN UNA MEJOR VERSION POR AHORA 
DECLARARE UN USARIO QUE SEA ENCARGADO  PARA EL EJEMPLO 
*/

/*
TODO TIPO DE FUNCIONES UTILIZADAS
*/
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

// 👇 FUNCIONALIDAD PARA CARGAR LOS CELULARES POR GAMA 
const filtrarPorGama = (gama) => {
    return celulares.filter((celulares)=> celulares.gama === gama);
}
// 👇 FUNCIONALIDAD PARA FILTRAR LOS AUDICULARES POR TIPO 
const filtrarPorTipo = (tipo) => {
    return audiculares.filter((audiculares)=> audiculares.tipo === tipo);
}
// 👇 FUNCIONALIDAD PARA DEVOLVER UN PRODUCTO EN PARTICULAR
// Funciones de búsqueda
const verAudicular = (marca) => {
    return audiculares.find(audicular => audicular.marca.toUpperCase() === marca.toUpperCase());
}

const verCelular = (marca) => {
    return celulares.find(celular => celular.marca.toUpperCase() === marca.toUpperCase());
}

const encargado = usuarios[0]; // Acceso correcto al primer usuario
let consulta = prompt( "Desea cargar los productos nuevos?").toUpperCase();

//CARGA DE PRODUCTOS
while (consulta === "SI") {
    let opcion = prompt(" Que desea cargar Opcion 1 Celular o Opcion 2 Audicular") 
    if (!encargado.esEncargado()) {
        console.log('No tienes permisos para agregar productos.');
        consulta="NO";
    }
    else if(opcion==1){
        marca = prompt("Ingrese la marca del producto");
        precio = Number(prompt("Ingrese el precio del producto"));
        stock = Number(prompt("Ingrese el stock del producto"));
        gama = prompt("Ingrese la gama del producto: ALTA - MEDIA").toUpperCase();
        agregarCelular(marca, precio, stock, gama)
    }
    else if(opcion==2)
        {
            marca = prompt("Ingrese la marca del producto");
            precio = Number(prompt("Ingrese el precio del producto"));
            stock = Number(prompt("Ingrese el stock del producto"));
            tipo = prompt("Ingrese el tipo del producto: OVER-EAR o IN-EAR ").toUpperCase();
            agregarAudicular(marca, precio, stock, tipo)
        }
    else{
        alert('Opcion Invalida');
    }
    consulta = prompt("Desea seguir agregando productos?").toUpperCase();
}

//FILTRADO
consulta=prompt("¿Desea filtrar algun prducto?").toUpperCase()

while (consulta === "SI")
    {
        let opcion= prompt("1:Celualres o 2:Audiculares");
        if(opcion==1){
            let gama = prompt("Ingrese la gama que desea filtrar: ALTA -MEDIA").toUpperCase();
            const celularesFiltrados = filtrarPorGama(gama);
            console.log(celularesFiltrados)
            consulta="NO"
        }
        else if(opcion==2)
            {
                let tipo = prompt("Ingrese la gama que desea filtrar: OVER-EAR o IN-EAR").toUpperCase();
                const audicularesFiltrados = filtrarPorTipo(tipo);
                console.log(audicularesFiltrados)
                consulta="NO"
            }
        else{
            alert('Opcion Invalida');
        }
    }

    // BUSQUEDA DE PRODUCTOS

let buscar= prompt("Desea buscar un producto en particular?").toUpperCase();

    while (buscar === "SI") {
        let productoEspecifico;
        let opcion = prompt("1: Celulares o 2: Audiculares");
        
        if (opcion === "1") {
            let marcaEspecifica = prompt("Ingrese la marca del producto que desea ver");
            productoEspecifico = verCelular(marcaEspecifica);
            if (productoEspecifico) {
                console.log('Celular encontrado:', productoEspecifico);
            } else {
                console.log('Celular no encontrado.');
            }
            buscar = "NO";
        } else if (opcion === "2") {
            let marcaEspecifica = prompt("Ingrese la marca del producto que desea ver");
            productoEspecifico = verAudicular(marcaEspecifica);
            if (productoEspecifico) {
                console.log('Audicular encontrado:', productoEspecifico);
            } else {
                console.log('Audicular no encontrado.');
            }
            buscar = "NO";
        } else {
            alert('Opción Inválida');
            buscar = "NO";
        }
    }