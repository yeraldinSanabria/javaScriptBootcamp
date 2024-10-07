// variables para if

let edad = 20;
let calificacion = parseFloat(prompt(("ingrese su calificacion ")));

// variable de que generacioneres 

let anoNacimiento = parseFloat(prompt(("ingrese su año de nacimiento")));

// variable para el if con edades}

let edades = parseInt(prompt(("ingrese su edad")));


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