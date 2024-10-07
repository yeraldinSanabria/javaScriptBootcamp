// // ciclo for 

// // incremento 

// for (let i = 1; i <= 4; i++) {
//     console.log(i)

// }

// // decremento 
// for (let j = 20; j >= 1; j -= 1) { //puedo colocar un +=3 eso quiere decir que va a incrementar ede 3 en 3 
//     console.log(j)

// }

// // tablas de multiplicar 

// // let tabla = parseInt(prompt(("ingrese el número de la tabla que desea observar")));

// for (let i = 1; i <= 10; i++) {
//     console.log(` ${4} * ${i} = ${4 * i}`)
// }

// // suma de numeros positivos donde el usuario colcoa el numero hasta donde llevara el for 

// // let n = parseInt(prompt("Introduce un nuemro positivo"));
// let suma = 0;

// for (let i = 1; i <= 5; i++) {
//     suma += 5;
//     console.log(`la suma de los numeros del 1 al ${5} es : ${suma}`);
// }

// // todas las tablas


// for (let i = 1; i <= 10; i++) {
//     console.log(`La tabla del ${i}`)
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
//     console.log(" ")
// }

// // suma de los 100 primeros numeros impares

// let sum = 0;
// let contador = 0;

// for (let i = 1; contador <100; i += 2) {
//     sum += i;
//     contador++;
// }
// console.log(`la suma de los primeros 100 números impares es de ${sum}`)

// ejercicios de los * 

let ingreseNumero = parseInt(prompt("introduce un numero"));

for (let i = 1; i <= ingreseNumero; i++) {
    console.log("*".repeat(i));
}
