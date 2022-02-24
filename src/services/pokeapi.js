const URL_POKE = "https://pokeapi.co/api/v2/pokemon?limit=500";

//función que devuelve todos los pokemons de la API
export async function getPokes(){
  let data = await fetch(URL_POKE);
  let pokes = await data.json();

  return pokes.results;

}