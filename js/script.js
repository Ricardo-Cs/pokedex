async function fetchPokemon(pokemon) {
  // Como basicamente se pega os dados da api
  const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await APIresponse.json();

  console.log(data.id);
}

// fetchPokemon("pichu");