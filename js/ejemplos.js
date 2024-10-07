// // Comentarios

// /*

// Comentarios multilinea

// */

// // Variables

// /*

// var

// let

// const

// */
// /*
// let numero = 5;

// numero = 15;

// numero = 45;

// console.log(numero);


// let decimal = 12.5;

// decimal = 25.6;

// decimal = 15.7;

// console.log(decimal);

// let estado = true;

// estado = false;

// console.log(estado);

// const direccion = "cra 15-2-63";

// console.log(direccion);

// const pi = 3.141516;

// console.log(pi);
// let opcion1, opcion2, suma;


// opcion1 = parseInt(prompt("Ingrese numero1 positivo"));
// opcion2 = parseInt(prompt("Ingrese numero2 positivo"));

// suma = opcion1 + opcion2;

// alert(suma);
// */

// // Estructuras condicionales if - else
// /*
// let opcion = parseInt(prompt("1. Consignar \n 2. Retirar \n 3. Consultar Saldo"));


// switch (opcion) {

//     case 1:

//         alert("Vas a cosignar");

//         break;

//     case 2:

//         alert("Vas a retirar");

//         break;
// case 3:

//         alert("Vas a consultar el saldo");

//         break;

//     default:

//         alert("Transaccion no encontrada");


// }
// if(opcion === 1){

//     alert("VAS A REALIZAR UNA CONSIGNACION");

// }else if(opcion === 2 ){

//     alert("VAS A REALIZAR UN RETIRO");

// }else if(opcion === 3 ){

//     alert("VAS A CONSULTAR EL SALDO");

// }else{

//     alert("OPERACION NO ENCONTRADA");

// }
// // Ciclo FOR

// // let opcion,suma=0;

// // for(let i = 1; i <= 7; i++){

// //    suma = suma + i;

   
// // }

// // alert(suma);
// let user="wamp";
// let password = "1234";


// let op1,op2

// op1 = prompt("Ingrese su usuario"); 
// op2 = prompt("Ingrese su contraseña");

// if(user === op1 && password === op2){
//     alert("Inicio de sesion")
    
// }else{
//     alert("No coinciden los datos");
// }
// // While - Mientras que

// let numpos = 0;
// let numneg = 0;
// let numero;

// let estado = true;

// while(estado){

//     numero = parseInt(prompt("Ingrese numero"));

//     if(numero > 0 ){
//         numpos += numero;

//         alert(`LA SUMA DE LOS POSITIVOS ES: ${numpos}`);

//     }else if(numero < 0){
//         numneg+= numero;
//         alert(`LA SUMA DE LOS NEGATIVOS ES: ${numneg}`);
       

//     }else{
//         estado = false;
//     }
// }

// while 

// let ac, acu, at;

// let r, lado, b , h;

// const pi = 3.1416;

// let opcion;

// opcion = parseInt(prompt(`1. Area Circulo \n 2. Area del Cuadrado \n 3. Area del Triangulo \n 4. Salir`));

// while(opcion != 4){

   

//   switch(opcion){


//     case 1: alert("Area del circulo");
//     // A = pi * r*r
//     r = parseFloat(prompt("Ingrese el valor del radio"));

//     ac = pi * (r*r);

//     alert(`El area del circulo es: ${ac}`);
  
//     break;
// case 2: alert("Area del cuadrado");

//    // A = lado * lado

//    lado = parseFloat(prompt("Ingrese el valor del lado"));

//    acu = (lado*lado);

//    alert(`El area del cuadrado es: ${acu}`);

//     break;

//     case 3: alert("Area del triangulo");

//     // A = B*H/2

//     b = parseFloat(prompt("Ingrese el valor de la base"));
//     h = parseFloat(prompt("Ingrese el valor de la altura"));

//     at = (b*h)/2;

//     alert(`El area del triangulo es: ${at}`);

//     break;
// case 4:
//       alert("SALIENDO.....");
//       //estado = false;

//     break;

//     default: 
//     alert("Opcion no valida");

  

//   }

//   opcion = parseInt(prompt(`1. Area Circulo \n 2. Area del Cuadrado \n 3. Area del Triangulo \n 4. Salir`));

// }

// do while
// let ac, acu, at;

// let r, lado, b , h;

// const pi = 3.1416;

// let opcion;

// let estado = true;

// do{

//   opcion = parseInt(prompt(`1. Area Circulo \n 2. Area del Cuadrado \n 3. Area del Triangulo \n 4. Salir`));
  

//   switch(opcion){


//     case 1: alert("Area del circulo");
//     // A = pi * r*r
//     r = parseFloat(prompt("Ingrese el valor del radio"));

//     ac = pi * (r*r);

//     alert(`El area del circulo es: ${ac}`);

//     break;
// case 2: alert("Area del cuadrado");

//    // A = lado * lado

//    lado = parseFloat(prompt("Ingrese el valor del lado"));

//    acu = (lado*lado);

//    alert(`El area del cuadrado es: ${acu}`);

//     break;

//     case 3: alert("Area del triangulo");

//     // A = B*H/2

//     b = parseFloat(prompt("Ingrese el valor de la base"));
//     h = parseFloat(prompt("Ingrese el valor de la altura"));

//     at = (b*h)/2;

//     alert(`El area del triangulo es: ${at}`);

//     break;
// case 4:
//       alert("SALIENDO.....");
//       estado = false;

//     break;

//     default: 
//     alert("Opcion no valida");

  

//   }


// }while(estado);