console.log("hola mundo");

// variables para concatenar

let numero1 = 20;
let numero2 = 50;
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let direcciones = "calle 144 c 145 -74";
let estado = true;


let nu1 = parseInt(prompt(("ingrese el primer valor ")));
let nu2 = parseInt(prompt(("ingrese el segundo valor ")));
let sum = nu1 + nu2;


// variables para numeros aleatorios
// forma 1 el mas uno se utiliza para llevar a cabo los 50 numeros alatorios
let aleatorio = Math.floor(Math.random() * 50) + 1;
// forma 2
let aleatorio2 = Math.floor(Math.random() * 100)

// variables para if

let edad = 20;
let calificacion = parseFloat(prompt(("ingrese su calificacion ")));

// variable de que generacioneres 

let anoNacimiento = parseFloat(prompt(("ingrese su año de nacimiento")));

// variable para el if con edades}

let edades = parseInt(prompt(("ingrese su edad")));


// varible de switch case 

let dia = 10;
let operador = "*";


// variables de conversor de moneda
let valoraCambiar = parseInt(prompt(("Para hacer el cambio a  Dolar ingrese el número 1, Euro ingrese el número 2, Libras esterinas ingrese el numero 3")));
let valorCambiado = parseFloat(prompt(("ingrese el valor a cambiar")));





// concatenar valores

console.log("el primer valor es:" + numero1);
console.log("el segundo valor es:" + numero2);
console.log("la suma de :" + numero1, "y", numero2, "es: ", suma);
console.log("la resta de :" + numero1, "y", numero2, "es: ", resta);
console.log("la multiplicacion de :" + numero1, "y", numero2, "es: ", multiplicacion);

// otra forma de concatenar con literaltemplate

console.log(`La suma de ${numero1} y ${numero2} Es: ${suma}`);
console.log(`La resta de ${numero1} y ${numero2} Es: ${resta}`);
console.log(`La multiplicacion de ${numero1} y ${numero2} Es: ${multiplicacion}`);

// palabra reservada typeof sirve para analizar o indagar el typo de una variable 

console.log(typeof (numero1));
console.log(typeof (direcciones));
console.log(typeof (estado));


console.log(`El primer valor ingresado es: ${nu1} y el valor de el segundo numero encontrado es: ${nu2}`)
console.log(`La suma es: ${sum} `)

// generacion de numeros aleatorios


console.log(aleatorio);
console.log(aleatorio2)

// Estructura If 

if (edad >= 18) {
    console.log("es mayor de edad")
} else {
    ("es menor de edad")
}

if (calificacion < 3.0) {
    console.log("El estudiante reprobo")
} else if (calificacion > 3.1 && calificacion <= 4.0) {
    console.log("El estudiante paso el año")
} else {
    console.log("es muy bueno")
}

// && se cumplen 2 condiciones, estos operadores logicos se deben escribir dos veces para que no marque error
// || se cumple solo 1 condicion 


if (anoNacimiento >= 1883 && anoNacimiento <= 1900) {
    console.log("Eres generacion perdida")
} else if (anoNacimiento >= 1901 && anoNacimiento <= 1924) {
    console.log("Eres generacion grandiosa")
} else if (anoNacimiento >= 1925 && anoNacimiento <= 1945) {
    console.log("Eres generacion silenciosa")
} else if (anoNacimiento >= 1946 && anoNacimiento <= 1964) {
    console.log("Eres generacion baby boomers")
} else if (anoNacimiento >= 1965 && anoNacimiento <= 1980) {
    console.log("Esres generacion X")
} else if (anoNacimiento >= 1981 && anoNacimiento <= 1996) {
    console.log("Esres generacion Y")
} else if (anoNacimiento >= 1997 && anoNacimiento <= 2012) {
    console.log("Esres generacion Z")
} else if (anoNacimiento >= 2013 && anoNacimiento <= 2025) {
    console.log("Esres generacion alpha")
} else (
    console.log("las fechas de nacimiento comprenden desde el año 1883 hasta 2025")
)

// if con edades 

if (edades >= 0 && edades <= 5) {
    console.log("Eres un infante")
} else if (edades >= 6 && edades <= 11) {
    console.log("Eres un Niño")
} else if (edades >= 12 && edades <= 17) {
    console.log("Eres un adolecente")
} else if (edades >= 18 && edades <= 29) {
    console.log("Eres un joven")
} else if (edades >= 30 && edades <= 59) {
    console.log("Eres adulto")
} else (
    console.log("Eres Adulto mayor")
)

// una forma mas optima para realiza el anterior if 

if (edades <= 5) {
    console.log("Eres un infante")
} else if (edades <= 11) {
    console.log("Eres un Niño")
} else if (edades <= 17) {
    console.log("Eres un adolecente")
} else if (edades <= 29) {
    console.log("Eres un joven")
} else if (edades <= 59) {
    console.log("Eres adulto")
} else (
    console.log("Eres Adulto mayor")
)

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