
// varible de switch case 

let dia = 10;
let operador = "*";


// variables de conversor de moneda
let valoraCambiar = parseInt(prompt(("Para hacer el cambio a  Dolar ingrese el número 1, Euro ingrese el número 2, Libras esterinas ingrese el numero 3")));
let valorCambiado = parseFloat(prompt(("ingrese el valor a cambiar")));

// variable menu de carnes

let menu = prompt(("Nuestro menú consta de :\nCarne, \nPescado, \nEnsalada \nIngrese el nombre de lo que desea ordenar")).toLocaleLowerCase(); //el \n se utilaz para escribir el la siguente linea del prompt


// Variable de las estaciones del año
let estacionesDelAno = parseInt(prompt("Ingrese el número del mes del año del cual desea saber en que estacion se encuentra"));

// Estructura switch case 

switch (dia) {
    case 1:
        console.log("Dia lunes")
        break;
    case 2:
        console.log("Dia Martes")
        break;
    case 3:
        console.log("Dia Miercoles")
        break;
    case 4:
        console.log("Dia Jueves")
        break;
    case 5:
        console.log("Dia viernes")
        break;
    case 6:
        console.log("Dia Sabado")
        break;
    case 7:
        console.log("Dia Domingo")
        break;

    default: console.log("Dia no existe ")
        break;
}

switch (operador) {
    case "+":
        console.log("es una suma")
        break;
    case "-":
        console.log("es una resta")
        break;
    case "*":
        console.log("es una multiplicacion")
        break;
    case "/":
        console.log("es una division ")
        break;

    default: console.log("la operacion no existe")
        break;
}

switch (valoraCambiar) {

    case 1:
        console.log((valorCambiado / 4280).toFixed(3) + " " + "Dolares")
        break;
    case 2:
        console.log((valorCambiado / 4432).toFixed(3) + " " + "Euros")
        break;
    case 3:
        console.log(Math.round(valorCambiado / 5601).toFixed(3) + " " + "Libras Esterlinas")
        break;

    default: console.log("valor ingresado es incorrecto")
        break;
}


// funcion del menu de carnes

switch (menu) {
    case "carne":
        console.log("¿Desea beber vino tinto?")
        break;
    case "pescado":
        console.log("¿Desea beber vino?")
        break;
    case "ensalada":
        console.log("¿Desea beber agua?")
        break;
    default: console.log("Elija porfavor Carne, Pescado o Ensalada.\nPara realizar  la orden")
        break;
}


// funcion de las estaciones del año

switch (estacionesDelAno) {
    case 12:
    case 1:
    case 2:
        console.log("Invierno")
        break;
    case 3:
    case 4:
    case 5:
        console.log("Primavera")
        break;
    case 6:
    case 7:
    case 8:
        console.log("Verano")
        break;
    case 9:
    case 10:
    case 11:
        console.log("Otoño")
        break;
    default: console.log("Ingrese el valor correcto")
        break;
}