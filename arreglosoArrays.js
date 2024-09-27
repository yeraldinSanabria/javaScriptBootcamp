// let estudiantes = ["paola", "juan", "julian", "ana", "sofia"]
// console.log(estudiantes);

// // añadir un nuevo estudiante al final del arreglo 

// console.log(estudiantes.push("pedro"));

// // añadir un nuevo estudiante al inicio del arreglo 

// console.log(estudiantes.unshift("esmeralda"));


// // añadir un nuevo estudiante en cualquier posicion del  arreglo

// console.log(estudiantes.splice(2, 0, "luz"));

// // como eliminar el ultimo elemento 

// console.log(estudiantes.pop());


// // como eliminar el primer elemento 

// console.log(estudiantes.shift());


// // como eliminar cualquier posicion 

// console.log(estudiantes.splice(2, 1));

// // saber la posicion de un elemento 

// console.log(estudiantes.indexOf("ana"));

// // agregar en un array vacio 

// let vector = [];

// vector[0] = 15;
// vector[1] = 63;
// vector[2] = 48;

// console.log(vector);


// // como recorrer el arreglo para llenarlo con el forech 

// for (let i = 0; i < 5; i++) {
//     vector.push(i + 1);
// }


// for (let i = 0; i < 5; i++) {
//     console.log(vector.push(i));
// }

// sumar numeros del arreglo con for normal

let numeros1 = [12, 23, 18, 16, 19];
let sum = 0;
let pares = 0;
let impares = 0;

// for (let i = 0; i < numeros1.length; i++) {
//     sum += numeros1[i];
// }
// console.log(`La suma es ${sum}`)

// suma con un forech 

// numeros1.forEach((sums) => {
//     sum += sums;
// });

// console.log(`La suma es ${sum}`);

// sumar los numeros pares y los impares 

// for (let i = 0; i < numeros1.length; i++) {
//     if (numeros1[i]%2==0) {
//         pares += numeros1[i]
//     }else{
//         impares+=numeros1[i]
//     }
// }
// console.log(`Los numeros pares suman ${pares}`);
// console.log(`Los numeros impares suman ${impares}`)

// creo el arreglo y el usuario lo llena

// let n = new Array(5);

// for (let i = 0; i < n.length; i++) {
//    n [i]= parseInt (prompt("Ingrese el numero entero"));

// }

// for (let i = 0; i < n.length; i++) {
//     n[i]= push(Math.floor(Math.random() * 100) + 1);

//  }


// for (let i = 0; i < n.length; i++) {
//    console.log(`${n[i]}`)

// }
// el mismo ejercicio anterior con un foreach 

// numeros1.forEach((element) => {
//     element %2 !==0? (pares += element) : (impares += element);
// });
// console.log(`Los numeros pares suman ${pares}`);
// console.log(`Los numeros impares suman ${impares}`)


// imprimir el numero mayor y el numero menor 

// let sumaNun =[12,23,18,16,19]
// let mayor= sumaNun[0];
// let menor= sumaNun[0];

// for (let i = 1; i < sumaNun.length; i++) {

//     if (sumaNun[i]>mayor) {
//         mayor = sumaNun[i];
//     }

//     if (sumaNun[i]<menor) {
//         menor = sumaNun[i];
//     } 
// }
// console.log(`el numero mayor es: ${mayor}`)
// console.log(`el numero menor es: ${menor}`)


let tamano = parseInt(prompt("ingrese la cantidad de estudiantes"));
let notas = new Array(tamano);
let promedio = 0;


for (let i = 0; i < tamano; i++) {
    notas[i] = parseFloat(prompt("ingrese las notas"))

}

// inicializo las variable despues de recorrer y llenar el ciclo por que si no falla
let calificacionAlta = notas[0];
let calificacionBaja = notas[0];

for (let i = 0; i < tamano; i++) {
    console.log(`Calificacion ${i + 1} : ${notas[i]}`);
    promedio += notas[i];

    if (notas[i] > calificacionAlta) {
        calificacionAlta = notas[i];
    }

    if (notas[i] < calificacionBaja) {
        calificacionBaja = notas[i];
    }

}
console.log(`la suma de las calificadiones es ${promedio}`)
console.log(`el promedio de las notas es ${promedio / tamano}`);
console.log(`la calificacion mas alta es  ${calificacionAlta}`);
console.log(`la calificacion mas baja  es  ${calificacionBaja}`);
