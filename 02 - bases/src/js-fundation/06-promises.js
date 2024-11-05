const {http} = require("../plugins");

const getPokemonById = async (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   return fetch(url)
//     .then((res) => res.json())
//     .then((pokemon) => pokemon.name)

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    // const res = await fetch(url);
    // const pokemon = await res.json();
    // return pokemon.name

    const res = await http.get(url);
    console.log(res.name)
    return res.name
};

module.exports = { getPokemonById };
