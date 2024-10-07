
// Deficion de inicializacion de variables y arreglos 

function imprimaProducto(prod, prec, tot_art) {
    // muestra productos facturados, nombre, precio y total 
    for (let i = 0; i < tot_art; i++) {
        console.log(`Productos ${prod[i]} : Precio: ${prec[i]}`)
    }

}

let productos = new Array(10);
let precios = new Array(10);
let contador = 0;

function caja() {

    let facturacion = 0;

    // solicitar nombre y precio del producto 

    for (let i = 0; i < productos.length; i++) {

        // solicitar productos 

        let nombre = prompt("Ingrese el nombre del producto");
        let valor = parseFloat(prompt("Ingrese el valor del producto"));

        productos[i] = nombre;
        precios[i] = valor;
        contador++

        // suma precio de los productos 
        facturacion += valor;

        // pregunta si desea seguir facturando 

        masArticulos = confirm("Desea seguir facturando más articulos ..?")

        if (masArticulos == false) {
            imprimaProducto(productos, precios, contador);
            break;
        }
    }
    console.log(`Total a pagar: ${facturacion}`)
}

caja();
