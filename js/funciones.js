// // ejemplo 1 
// saludar("Juan Rojas")

// function saludar(nombre) {
//     alert(`hola ${nombre}`);

// }

// // ejemplo 2 forma tradicional

// function raiz(numero) {
//     return Math.sqrt(numero);
// }
// console.log(raiz(32));

// //  ejemplo 3

// function exponente(base, cuadrado) {
//     return Math.pow(base, cuadrado);
// }
// console.log(`El cuadrado es ${exponente(12, 6)}`);


// ejemplo con conversion

// let valoraCambiar = parseInt(prompt(("Para hacer el cambio a  Dolar ingrese el número 1, Euro ingrese el número 2, Libras esterinas ingrese el numero 3")));
// let valorCambiado = parseFloat(prompt(("ingrese el valor a cambiar")));


// function cambio_a_dolares(valorCambiado) {
//     let dolar = 4280;
//     return ((valorCambiado / dolar).toFixed(3) + " " + "Dolares");
// }

// function cambio_a_euros(valorCambiado) {
//     let euro = 4432;
//     return ((valorCambiado / euro).toFixed(3) + " " + "Euros");
// }

// function cambio_a_libras(valorCambiado) {
//     let libras = 5601;
//     return ((valorCambiado / libras).toFixed(3) + " " + "Libras");
// }


// switch (valoraCambiar) {

//     case 1:
//         console.log(cambio_a_dolares(valorCambiado));
//         break;
//     case 2:
//         console.log(cambio_a_euros(valorCambiado));
//         break;
//     case 3:
//         console.log(cambio_a_libras(valorCambiado));
//         break;

//     default: console.log("valor ingresado es incorrecto")
//         break;
// }


// ejemplo con conversion en temperatura



// !----- Funcion de flecha----!

// 1 forma 

let multiplicacion1 = (a, b) => {
    return a * b;
}

console.log(multiplicacion1(3, 5));

// 2 forma 

let multiplicacion2 = (a, b) => a * b;
console.log(multiplicacion2(5,7));