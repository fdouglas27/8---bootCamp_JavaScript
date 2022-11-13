// Recuerdas el ejercicio de los pokemons? Ahora vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon.
//  También vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon que sea de tipo fuego.

const pokemons = [{nombre:'Pikachu', tipoDePokemon:'electrico'}, {nombre:'Charizard', tipoDePokemon:'fuego'}, {nombre:'Garchomp', tipoDePokemon:'tierra'}];

for (let i = 0; i < pokemons.length; i++) {
        console.log(pokemons[i].nombre);
}
for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].tipoDePokemon == 'fuego') {
        console.log(`${pokemons[i].nombre} es pokemon es estilo fuego`);
    };
}