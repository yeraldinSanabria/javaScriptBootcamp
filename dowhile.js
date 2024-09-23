// // do while 
// // calcular el area de un circulo,cuadrado, triangulo 
// // area del circulo a= pi* (r*r)
// // area del cuadrado a= lado *lado
// // area de un trinagulo a= base*altura /2

// let areaCirculo, areaCudrado, areaTriangulo;
// let radio, lado, base, altura;
// const pi = 3.1416;
// let opcion;


// do {
//   opcion = parseInt(prompt(`1. Area del circulo\n 2. Area del cuadrado\n 3. Area del tringulo \n 4. Salir`))

//   switch (opcion) {
//     case 1:
//       alert("Area del circulo");
//       radio = (parseFloat(prompt(`Ingrese el valor del radio`)));
//       areaCirculo = pi * (radio * radio);
//       alert(`El area del circulo es: ${areaCirculo}`);
//       break;
//     case 2:
//       alert("Area del cuadrado");
//       lado = (parseFloat(prompt(`Ingrese el valor del lad`)));
//       areaCudrado = (lado * lado);
//       alert(`El area del cuadrado es: ${areaCudrado}`);
//       break;
//     case 3:
//       alert("Area del triangulo");
//       base = (parseFloat(prompt(`Ingrese el valor de la base`)));
//       altura = (parseFloat(prompt(`Ingrese el valor de la altura`)));
//       areaTriangulo = (base * altura) / 2;
//       alert(`El area del triangulo es: ${areaTriangulo}`)
//       break;
//     case 4:
//       alert("saliendo...")
//       break;
//     default:
//       alert("Opcion no valida")
//   }
// } while (opcion != 4);

// // converion de temperaturas

// let kac, kaf, fac, fak, cak, caf;
// let kac1, kaf1, fac1, fak1, cak1, caf1;
// let conversion;
// let opcion1;
// let estado=true;

// do {
//   opcion1 = parseInt(prompt(`1.Kelvin a Celsius \n 2. Kelvin a Fahrenheit\n 3.Fahrenheit a Celsius \n 4.Fahrenheit a Kelvin \n 5.Celsius a Kelvin \n 6.Celsius a Fahrenheit\n 7. Salir`))

//   switch (opcion1) {
//     case 1:
//       alert("Conversion de Kelvin a Celsius");
//       kac1 = (parseFloat(prompt(`Ingrese la temperatura en  kelvin`)));
//       kac = (kac1-273.15).toFixed(3);
//       alert(`Equivale a: ${kac} Celsius`);
//       break;
//     case 2:
//       alert("Conversion de Kelvin a Fahrenheit");
//       kaf1 = (parseFloat(prompt(`Ingrese la temperatura en  kelvin`)));
//       kaf = (((kaf1-273.15)*9/5)+32).toFixed(3);
//       alert(`Equivale a: ${kaf} Fahrenheit`);
//       break;
//     case 3:
//       alert("Conversion de Fahrenheit a Celsius");
//       fac1 = (parseFloat(prompt(`Ingrese la temperatura en Fahrenheit`)));
//       fac = ((fac1-32)*5/9).toFixed(3);
//       alert(`Equivale a: ${fac} Celsius`)
//       break;
//     case 4:
//       alert("Conversion de Fahrenheit a Kelvin");
//       fak1 = (parseFloat(prompt(`Ingrese la temperatura en Fahrenheit`)));
//       fak = (((fak1-32)*5/9)+273.15).toFixed(3);
//       alert(`Equivale a: ${fak} Kelvin`)
//       break;
//     case 5:
//       alert("Conversion de Celsius a Kelvin");
//       cak1 = (parseFloat(prompt(`Ingrese la temperatura en Celsius`)));
//       cak = (cak1+273.15).toFixed(3);
//       alert(`Equivale a: ${cak} Kelvin`)
//       break;
//     case 6:
//       alert("Conversion de Celsius a Fahrenheit");
//       caf1 = (parseFloat(prompt(`Ingrese la temperatura en Celsius`)));
//       caf = (((caf1*9)/5)+32).toFixed(3) ;
//       alert(`Equivale a: ${caf} Fahrenheit`)
//       break;
//     case 7:
//       alert("saliendo...")
//       break;
//     default:
//       alert("Opcion no valida")
//   }
// } while (opcion1 !=7);

// repeticion de letras segun numero asignado 

let letraIngrezada;
let condicion = true;
let numero;
let result;

do {

  letraIngrezada = prompt("Ingrese la letra Z o la X Segun su prefrerencia").toLocaleLowerCase();

  switch (letraIngrezada) {
    case "x":
    case "z":
      numero = (parseInt(prompt("Ahora ingresa una numero de 1 al 15 ")));
      if (numero >= 1 && numero <= 15) {
        result = "";
        for (let i = 1; i <= numero; i++) {
          result += letraIngrezada;
        }
        console.log(result);

      } else {
        alert("Ingrese un numero de 1 a 15")
      }
      break;
    default:
      alert("Escoja una letra entre la X o Z")
      break;
  }
} while (condicion);