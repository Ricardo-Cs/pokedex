const pokemonName = document.querySelector(".pokemon-name");
const pokemonId = document.querySelector(".pokemon-number");
const pokemonImage = document.querySelector(".pokemon-image");

const form = document.querySelector(".form");
const search = document.querySelector(".search");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");


let searchPokemon = 1;

// Pega os dados na API de acordo com o pokemon passado como parâmetro
async function fetchPokemon(pokemon) {
  const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIresponse.status === 200) {
    const data = await APIresponse.json();
    return data;
  }
}

// Insere os dados retornados no HTML
async function insertData(pokemon) {
  pokemonName.innerHTML = "Loading...";
  pokemonId.innerHTML = '';
  const data = await fetchPokemon(pokemon);

  if(data) {
    pokemonImage.style.display = 'block';
    pokemonImage.src = data['sprites']['front_default'];
    pokemonId.innerHTML = data.id;
    pokemonName.innerHTML = data.name;

    searchPokemon = data.id;
    search.value = '';
  } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = "Not Found";
    pokemonId.innerHTML = "";
  }
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  insertData(search.value.toLowerCase());
});

prevButton.addEventListener("click", () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    insertData(searchPokemon);
  }
});

nextButton.addEventListener("click", () => {
  searchPokemon += 1;
  insertData(searchPokemon);
});

insertData(searchPokemon);