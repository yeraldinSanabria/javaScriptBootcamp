// // objetos Clave Valor 

// let carro1 = {
//     marca: "ford",
//     modelo: "Fiesta",
//     color: "Rojo",
//     anio: "2018",
//     placa: "ABC123",
// }

// let carro2 = {
//     marca: "Renault",
//     modelo: "Logan",
//     color: "Azul",
//     anio: "2019",
//     placa: "XYZ321",
//     acelerar(){
//         return "El carro 2 esta acelerando";
//     }
// }

// console.log("Datos Carro 1 :", carro1);
// console.log("Datos Carro 2: ", carro2);

// console.log(`LA MARCA DEL VEHICULO ES: " ${carro1.marca}`);
// console.log(`LA PLACA DEL VEHICULO ES: " ${carro1.placa}`);

// carro1.marca = "Toyota";
// carro1.color = "Gris";

// console.log("Los Datos Del Vehiculo 1 SON :", carro1)

// console.log(carro2.acelerar());


// class Persona {

//     constructor(nombre, edad) {
//         this._nombre = nombre;
//         this._edad = edad;
//     }

//     get nombre() {
//         return this._nombre;
//     }

//     set nombre(nombre) {
//         this._nombre = nombre;
//     }


//     get edad() {
//         return this._edad;
//     }

//     set edad(edad) {
//         this._edad = edad;
//     }

//     saludar() {
//         console.log(`Hola soy ${this._nombre} y tengo ${this._edad} años`)
//     }
// }
// const p1 = new Persona("Juan", 25);
// const P2 = new Persona("Abril", 6)


// p1.nombre = "Andres";

// P2.edad=5;    

// p1.saludar();
// P2.saludar();


// class Producto {
//     constructor(nombre, precio, cantidad) {
//         this._nombre = nombre;
//         this._precio = precio;
//         this._cantidad = cantidad;
//     }

//     get nombre() {
//         return this._nombre;
//     }

//     set nombre(nombre) {
//         this._nombre = nombre;
//     }


//     get precio() {
//         return this._precio;
//     }

//     set precio(precio) {
//         this._precio = precio;
//     }

//     get cantidad() {
//         return this._cantidad;
//     }

//     set cantidad(cantidad) {
//         this._cantidad = cantidad;
//     }

//     mostrarNombreProducto() {
//         console.log(`El nombre del producto es : ${this._nombre}, el precio es :${this._precio} y la cantidad ${this._cantidad}`);
//     }

//     valorTotal() {
//         return this._precio * this._cantidad;
//     }

//     modificarCantidad(nuevaCantidad) {
//         this._cantidad = nuevaCantidad;
//         console.log(`La nueva cantidad es : ${this._cantidad}`);
//     }

//     anadirStock(nuevaCantidad) {
//         return this._cantidad += nuevaCantidad;
//     }

//     venderStock(nuevaCantidad) {
//         return this._cantidad -= nuevaCantidad;
//     }

//     operacion() {
//         let nCantidad;
//         nCantidad = parseFloat(prompt(`Ingrese la nueva cantidad`));

//         let op = parseInt(prompt("Ingrese que tipo de operacion desea realizar 1. Añandir 2. Restar"));
//         if (op === 1) {
//             console.log("La nueva cantidad es ", prod3.anadirStock(nCantidad));
//         } else {
//             console.log("la nueva contidad es", prod3.venderStock(nCantidad));
//         }

//     }

//     static crearProducto() {
//         let productos;
//         let precios;
//         let cantidades;


//         do {
//             productos = prompt(`Ingrese el nombre del producto`);
//         } while (!productos);

//         do {
//             precios = parseInt(prompt(`Ingrese el precio del producto`));

//         } while (isNaN(precios || precios <= 0));

//         do {
//             cantidades = parseInt(prompt(`Ingrese la cantidad del producto`));
//         } while (isNaN(cantidades || cantidades <= 0));

//         return new Producto(productos, precios, cantidades);
//     }
// }


// const prod1 = new Producto("Mouse", 45000, 5);
// const prod2 = new Producto("Monitor", 1450000, 3);

// const prod3 = Producto.crearProducto();


// prod1.mostrarNombreProducto();
// prod2.mostrarNombreProducto();
// prod3.mostrarNombreProducto();

// console.log(`El valor del producto uno es :${prod1.valorTotal()}`);
// console.log(`El valor del producto dos es :${prod2.valorTotal()}`);
// console.log(`El valor del producto tres  es :${prod3.valorTotal()}`);

// prod3.operacion();

// prod1.modificarCantidad(8);
// prod2.modificarCantidad(6);
// // prod3.modificarCantidad(nCantidad);

// // console.log("La nueva cantidad es", prod3.modificarStock(nCantidad));

// prod1.mostrarNombreProducto();
// prod2.mostrarNombreProducto();
// prod3.mostrarNombreProducto();


// console.log(`El valor del producto uno es :${prod1.valorTotal()}`);
// console.log(`El valor del producto dos es :${prod2.valorTotal()}`);
// console.log(`El valor del producto tres es :${prod3.valorTotal()}`);


// class Termostato {
//     constructor(temperatura, estado) {
//         this._temperatura = temperatura;
//         this._estado = estado;
//     }

//     get temperatura() {
//         return this._temperatura;
//     }

//     set temperatura(temperatura) {
//         this._temperatura = temperatura;
//     }
//     get estado() {
//         return this._estado;
//     }

//     set estado(estado) {
//         this._estado = estado;
//     }

//     estadoTermostato() {
//         alert(`El termostato se encuentra pagado`);
//         let opcion = parseInt(prompt(`Ingrese\n 1. Para Encender\n 2 .Salir`));
//         switch (opcion) {
//             case 1:
//                 this.encenderTermostato();
//                 break;
//             case 2:
//                 alert(`Saliendo...`);
//                 break;

//             default:
//                 break;
//         }

//     }

//     encenderTermostato() {
//         let opcion2 = parseInt(prompt(`Ingrese \n 1. Subir Temperatura \n 2.Bajar la temperatura \n 3. Apagar`));
//         switch (opcion2) {
//             case 1:
//                 this.subirTemperatura();
//                 break;
//             case 2:
//                 this.bajarTemperatura();
//                 break;
//             case 3:
//                 this.estadoTermostato();
//             default:
//                 break;
//         }

//     }

//     subirTemperatura() {

//         let numero = true;

//         while (numero) {
//             this.temperatura = Math.floor(Math.random() * 50);
//             let subirTemperatura2 = parseFloat(prompt(`La temperatura actual es de: ${this._temperatura} °C`));

//             if (!isNaN(subirTemperatura2) && subirTemperatura2 > 0) {
//                 this._temperatura += subirTemperatura2;
//                 alert(`La temperatura actual es: ${this._temperatura} °C`);
//                 numero = false;
//             } else {
//                 alert('Por favor, ingrese un número válido.');
//             }
//         }
//         alert(`El termostato se esta apagando`)
//     }

//     bajarTemperatura() {

//         let numero1 = true;

//         while (numero1) {
//             this.temperatura = Math.floor(Math.random() * 50) + 50;
//             let bajarTemperatura1 = parseFloat(prompt(`La temperatura actual es de: ${this._temperatura} °C`));

//             if (!isNaN(bajarTemperatura1 && bajarTemperatura1 > 0)) {
//                 this._temperatura -= bajarTemperatura1;
//                 alert(`La temperatura actual es: ${this._temperatura} °C`);
//                 numero1 = false;
//             } else {
//                 alert('Por favor, ingrese un número válido.');
//             }
//         }
//         alert(`El termostato se está apagando`);
//     }

// }

// const test = new Termostato();

// test.estadoTermostato();

class Termostato {
    constructor(temperatura, estado) {
        this._temperatura = temperatura;
        this._estado = estado;
    }

    get temperatura() {
        return this._temperatura;
    }

    set temperatura(temperatura) {
        this._temperatura = temperatura;
    }

    get estado() {
        return this._estado;
    }

    set estado(estado) {
        this._estado = estado;
    }

    encenderTermostato() {

        alert(`La temperatura actual es: ${this._temperatura}°C`);


        let menu = false;

        while (!menu) {
            let opcion2 = parseInt(prompt(`Ingrese \n 1. Subir Temperatura \n 2. Bajar la temperatura \n 3. Saliendo`));
            if (isNaN(opcion2)) {
                alert('Por favor, ingrese una opción válida.');
                continue; // Vuelve al inicio del ciclo
            }

            switch (opcion2) {
                case 1:
                    this.subirTemperatura();
                    break;
                case 2:
                    this.bajarTemperatura();
                    break;
                case 3:
                    menu = true
                    alert(`saliendo....`)
                    break;
                default:

                    break;
            }


        }

    }

    subirTemperatura() {
        let numero = true;
        while (numero) {
            let subirTemperatura2 = parseFloat(prompt(`La temperatura actual es de: ${this._temperatura} °C \n Ingrese la temperatura a subir:`));

            if (!isNaN(subirTemperatura2) && subirTemperatura2 > 0) {
                this._temperatura += subirTemperatura2;
                alert(`La nueva temperatura es: ${this._temperatura} °C`);
                numero = false;
            } else {
                alert('Por favor, ingrese un número válido.');
            }
        }
        this.cambiarEstado();  // muestra el estado en el que esta el termostato
    }

    bajarTemperatura() {
        let numero1 = true;
        while (numero1) {
            let bajarTemperatura1 = parseFloat(prompt(`La temperatura actual es de: ${this._temperatura} °C \n Ingrese la temperatura a bajar:`));
            if (!isNaN(bajarTemperatura1) && bajarTemperatura1 > 0) {
                this._temperatura -= bajarTemperatura1;
                alert(`La nueva temperatura es: ${this._temperatura} °C`);
                numero1 = false;

            } else {
                alert('Por favor, ingrese un número válido.');
            }
        }
        this.cambiarEstado();  // muestra el estado en el que esta el termostato
    }

    cambiarEstado() {
        if (this._temperatura >= 70) {
            this._estado = "encendido";
            alert("El termostato se está encendiendo.");
        } else if (this._temperatura <= 30) {
            this._estado = "apagado";
            alert("El termostato se está apagando.");
        }
    }
}

const encenderTermostato = Math.floor(Math.random() * 50) + 50;
const test = new Termostato(encenderTermostato, "apagado");

test.encenderTermostato();
