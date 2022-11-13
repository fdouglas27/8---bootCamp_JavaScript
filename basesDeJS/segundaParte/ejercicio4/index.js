// Crea una función que reciba un número y muestre por consola si es par o impar.

const numero = prompt('Ingrese un numero');

function impar($numero) {
    if ($numero % 2 === 0) {
return 'par'
    } else {
        return 'impar'
    }
}

alert(`El numero ingresado es ${impar(numero)}`)