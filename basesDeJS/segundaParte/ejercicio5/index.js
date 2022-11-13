// Crea una función que reciba un array de personas y devuelva un array con las personas mayores de edad.
// Dime cual es la persona más joven del array.
// Dime cual es la persona más mayor del array.
// Ojo: Puede que tengas que investigar sobre métodos de array y bucles.
let masJoven = 150;
let masVieja = 0;
const personas = [
    { nombre: 'Juan', edad: 18 },
    { nombre: 'María', edad: 16 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Pablo', edad: 15 },
    { nombre: 'Laura', edad: 19 },
];

// const arrayAprobados = alumnos.filter( x => x.nota >= 7);
const arrayPersonasMayores = personas.filter( persona => persona.edad >= 18);

const personaMasJoven = personas.forEach((persona) => {
    if (persona.edad < masJoven) {
        masJoven = persona.edad;
    }
}
);
const personaMasVieja = personas.forEach((persona) => {
    if (persona.edad > masVieja) {
        masVieja = persona.edad;
    }
}
);

console.log(arrayPersonasMayores);
console.log(masJoven);
console.log(masVieja);


