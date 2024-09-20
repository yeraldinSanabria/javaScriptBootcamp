// do while 


let k,f,c;

let opcion;

opcion = parseInt(prompt(`1. kelvin a celsius \n 2. De kelvin a Fahrenheit \n 3. Fahrenheit a celius  \n 4. Salir`));

while(opcion != 4){

   

  switch(opcion){


    case 1: alert("Area del circulo");
    // A = pi * r*r
    r = parseFloat(prompt("Ingrese el valor del radio"));

    ac = pi * (r*r);

    alert(`El area del circulo es: ${ac}`);
  
    break;
case 2: alert("Area del cuadrado");

   // A = lado * lado

   lado = parseFloat(prompt("Ingrese el valor del lado"));

   acu = (lado*lado);

   alert(`El area del cuadrado es: ${acu}`);

    break;

    case 3: alert("Area del triangulo");

    // A = B*H/2

    b = parseFloat(prompt("Ingrese el valor de la base"));
    h = parseFloat(prompt("Ingrese el valor de la altura"));

    at = (b*h)/2;

    alert(`El area del triangulo es: ${at}`);

    break;
case 4:
      alert("SALIENDO.....");
      //estado = false;

    break;

    default: 
    alert("Opcion no valida");

  

  }

  opcion = parseInt(prompt(`1. Area Circulo \n 2. Area del Cuadrado \n 3. Area del Triangulo \n 4. Salir`));

}
