console.log("hola mundo");

// variables

let numero1 = 20;
let numero2 = 50;
let suma = numero1+numero2;
let resta =numero1-numero2;
let multiplicacion=numero1*numero2;

console.log(suma)

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
