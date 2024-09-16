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




