// let numero = 1;

// while (numero <= 10) {
//   console.log(numero)
//   numero++;
// }

// // sumar numeros positivos


// let num2;
// let sum2 = 0;

// while ((num2 = parseInt(prompt("ingrese un numero positivo "))) > 0) {

//   sum2 += num2;
//   console.log(sum2);

// }
// console.log("la suma total es :", sum2)


// // menu de opciones 

// let opcion;
// let estado = true;
// let raiz, seno, coseno, numero2;

// // operaciones a relaizar 

// // 1. raiz 
// // 2. seno
// // 3. coseno

// while (estado) {
//   opcion = (parseInt(prompt(`seleciones una opcion \n 1 .Raiz \n 2 . Seno \n 3 . Coseno \n 4 . Salir `)));

//   switch (opcion) {
//     case 1:
//       alert("selecciono Raiz")
//       numero2 = (parseFloat(prompt(`Ingrese el numero para calcular la raiz`)))
//       raiz = Math.sqrt(numero2);
//       alert(`La raiz de ${numero2} Es: ${raiz}`)
//       break;
//     case 2:
//       alert("selecciono Seno")
//       numero2 = (parseFloat(prompt(`Ingrese el numero para calcular la seno`)))
//       seno = Math.sin(numero2);
//       alert(`El seno  de ${numero2} Es: ${seno}`)
//       break;
//     case 3:
//       alert("selecciono Coseno")
//       numero2 = (parseFloat(prompt(`Ingrese el numero para calcular la coseno`)))
//       coseno = Math.cos(numero2);
//       alert(`El coseno  de ${numero2} Es: ${coseno}`)
//       break;
//     case 4:
//       alert("saliendo...")
//       estado = false;

//     default:
//       alert("La opcion no existe")

//       break;
//   }

// }

  // juego de adicinar el numero 

  let aleatorio = Math.floor(Math.random() * 50) + 1;
  let numero3 = true;

  while (numero3) {

    let numeroaadivinar = parseInt(prompt("ingresa un numero del 1 al 50"))
    console.log(aleatorio)

    if (aleatorio === numeroaadivinar) {
      alert("Adivinaste")
      numero3 = false;
    } else if (aleatorio >= numeroaadivinar) {
      alert("El numero es mayor")
    } else if (aleatorio <= numeroaadivinar) {
      alert("El numero es menor")
    }

  }
