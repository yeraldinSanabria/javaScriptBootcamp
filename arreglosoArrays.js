let estudiantes = ["paola", "juan", "julian", "ana", "sofia"]
console.log(estudiantes);

// añadir un nuevo estudiante al final del arreglo 

console.log(estudiantes.push("pedro"));

// añadir un nuevo estudiante al inicio del arreglo 

console.log(estudiantes.unshift("esmeralda"));


// añadir un nuevo estudiante en cualquier posicion del  arreglo

console.log(estudiantes.splice(2,0,"luz"));

// como eliminar el ultimo elemento 

console.log(estudiantes.pop());


// como eliminar el primer elemento 

console.log(estudiantes.shift());


// como eliminar cualquier posicion 

console.log(estudiantes.splice(2,1));

// saber la posicion de un elemento 

console.log(estudiantes.indexOf("ana"));

// agregar en un array vacio 

let vector = [];

vector[0]=15;
vector[1]=63;
vector[2]=48;

console.log(vector);