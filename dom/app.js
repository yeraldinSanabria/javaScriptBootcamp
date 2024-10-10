// let elemento = document;
// elemento = document.body;
// console.log(elemento);

// let elementoE = document.styleSheets;
// console.log(elementoE);

// ********* buscar por id ¨************
let elementoId = document.getElementById('tituloDom');
console.log(elementoId);

let elementoId2 = document.getElementById('contenido');
console.log(elementoId2)

let opId1 = document.getElementById('p1')
opId1.innerHTML = 'javascrip';

// ********** buscar por clases ***********

let elementolista = document.getElementsByClassName('lista');
console.log(elementolista);

let elementoTag = document.getElementsByTagName('p');
console.log(elementoTag);

let elementoQ = document.querySelector('ul');
console.log(elementoQ.childElementCount);
console.log(elementoQ.children);
// console.log(elementoQ.children[1]);

console.log(elementoQ.firstElementChild);
console.log(elementoQ.lastElementChild);

let elementoClase = document.querySelector('#p1');
console.log(elementoClase);

let elementosp = document.getElementsByTagName('p');
console.log(elementosp.length);
for (let i = 0; i < elementosp.length; i++) {
    console.log(elementosp[i].textContent);
}

elementosp[2].innerHTML = 'prueba';

let opid = document.getElementById('p1');
opid.style.background = 'blue';
opid.style.color = 'red';
opid.style.borderRadius = '8px';
opid.style.width = "250px";
opid.style.height = '20px';
opid.style.textAlign = 'center';


function verFecha() {
    let fec = document.getElementById('resultado');
    fec.innerHTML = Date();
}

function   quitarFecha(){
    let qFech = document.getElementById('resultado');
    qFech.innerHTML = "Fecha";
}

function temperatura (){
       let numero = parseInt(document.getElementById('dato1').value);
       let calculo = numero - 273.5;

       let res1 = document.getElementById('res');
       res1.innerHTML = (`Resultado : ${calculo}`);
       
       alert(`la conversion es : ${calculo}`)
}