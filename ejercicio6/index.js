const pokemons = [{nombre:'Pikachu', tipoDePokemon:'electrico'}, {nombre:'Charizard', tipoDePokemon:'fuego'}, {nombre:'Garchomp', tipoDePokemon:'tierra'}];

for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].tipoDePokemon == 'fuego') {
        console.log('¡Es un pokemon de fuego!');
    };
    
}
