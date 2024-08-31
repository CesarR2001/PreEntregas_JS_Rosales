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
// 👇 FUNCIONALIDAD PARA DEVOLVER UN PRODUCTO EN PARTICULAR

// Funciones de búsqueda
const verAudicular = (marca) => {
    return audiculares.find(audicular => audicular.marca.toUpperCase() === marca.toUpperCase());
}

const verCelular = (marca) => {
    return celulares.find(celular => celular.marca.toUpperCase() === marca.toUpperCase());
}



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