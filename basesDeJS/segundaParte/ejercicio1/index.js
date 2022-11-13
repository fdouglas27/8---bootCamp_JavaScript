// Crea una función que reciba un número y devuelva el doble de ese número.
const parrafo = document.querySelector('p');
const numero = (numero) => numero * 2;

function imprimir() {
    const $numero = (prompt('Ingresa un numero'));
    alert(`El doble del numero ingresado es ${numero($numero)}`)
};

imprimir();
