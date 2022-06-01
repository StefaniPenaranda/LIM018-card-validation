import validator from './validator.js';

// obteniedo valor del input 
//let traeNumero = document.getElementById(inputNumero).value;
let numeroTarjeta= ""

let botonComprar = document.querySelector('.btn-comprar');

let registrarTarjeta = () => {
 numeroTarjeta= document.querySelector('.inputNumero').value;

if (numeroTarjeta === "" ) return alert("Ingrese su número de tarjeta")

}

console.log(validator.isValid('123456789'));
console.log(validator.maskify('123456789'));