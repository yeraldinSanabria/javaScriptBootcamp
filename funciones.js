// // ejemplo 1 
// saludar("Juan Rojas")

// function saludar(nombre) {
//     alert(`hola ${nombre}`);

// }

// // ejemplo 2

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


let conversion;
let opcion1;
let estado = true;


do {
    opcion1 = parseInt(prompt(`1.Kelvin a Celsius \n 2. Kelvin a Fahrenheit\n 3.Fahrenheit a Celsius \n 4.Fahrenheit a Kelvin \n 5.Celsius a Kelvin \n 6.Celsius a Fahrenheit\n 7. Salir`))

    switch (opcion1) {
        case 1:
            alert("Conversion de Kelvin a Celsius");
            alert(`Equivale a: ${kac()} Celsius`);
            break;
        case 2:
            alert("Conversion de Kelvin a Fahrenheit");
            alert(`Equivale a: ${kaf()} Fahrenheit`);
            break;
        case 3:
            alert("Conversion de Fahrenheit a Celsius");
            alert(`Equivale a: ${fac()} Celsius`)
            break;
        case 4:
            alert("Conversion de Fahrenheit a Kelvin");
            alert(`Equivale a: ${fak()} Kelvin`)
            break;
        case 5:
            alert("Conversion de Celsius a Kelvin");
            alert(`Equivale a: ${cak()} Kelvin`)
            break;
        case 6:
            alert("Conversion de Celsius a Fahrenheit");
            alert(`Equivale a: ${caf()} Fahrenheit`)
            break;
        case 7:
            alert("saliendo...")
            break;
        default:
            alert("Opcion no valida")
    }
} while (opcion1 != 7);

function kac() {
    let kac1 = (parseFloat(prompt(`Ingrese la temperatura en  kelvin`)));
    return (kac1 - 273.15).toFixed(3);
}

function kaf() {
    let kaf1 = (parseFloat(prompt(`Ingrese la temperatura en  kelvin`)));
    return (((kaf1 - 273.15) * 9 / 5) + 32).toFixed(3);
}

function fac() {
    let fac1 = (parseFloat(prompt(`Ingrese la temperatura en Fahrenheit`)));
    return ((fac1 - 32) * 5 / 9).toFixed(3);
}

function fak() {
    let fak1 = (parseFloat(prompt(`Ingrese la temperatura en Fahrenheit`)));
    return (((fak1 - 32) * 5 / 9) + 273.15).toFixed(3);;
}

function cak() {
    let cak1 = (parseFloat(prompt(`Ingrese la temperatura en Celsius`)));
    return (cak1 + 273.15).toFixed(3);;
}

function caf() {
    let caf1 = (parseFloat(prompt(`Ingrese la temperatura en Celsius`)));
    return (((caf1 * 9) / 5) + 32).toFixed(3);;
}
