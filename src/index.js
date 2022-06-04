import validator from './validator.js';

// abriendo el formulario de pago
const contenedor1 = document.querySelector('.contenedor1');
const contenedor2 = document.querySelector('.contenedor2');

const prod1 = document.querySelector('#prod1');
const prod2 = document.querySelector('#prod2');
const prod3 = document.querySelector('#prod3');

const cerrar = () =>{
    contenedor1.style.display = 'none';
    contenedor2.style.display = 'block';
}

prod1.addEventListener('click', cerrar);
prod2.addEventListener('click', cerrar);
prod3.addEventListener('click', cerrar);

// USANDO EL VALIDATOR EN EL FORMULARIO

const comprar = document.querySelector('#comprar');

//OBTENIEnDO los datos de los input 

const cardNumber = document.querySelector('#inputNumero');
let tarjeta = '';
cardNumber.addEventListener('input',()=>{
    tarjeta += cardNumber.value
    console.log(tarjeta)
    let mascara = validator.maskify(cardNumber.value);

    cardNumber.value = mascara
    
})

comprar.addEventListener('click',e =>{
    e.preventDefault();
   
    
    const validacion = validator.isValid(tarjeta);
    alert(tarjeta);
    if(validacion){
        alert('trajeta valida, pago procesado')
    } else{
        alert('tarjeta invalida')
    }
} )











// console.log(validator.isValid('123456789'));
// console.log(validator.maskify('123456789'));
