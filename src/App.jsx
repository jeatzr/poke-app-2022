import React, { useState, useEffect } from 'react';
import './App.css';
import { getPokes } from './services/pokeapi'
import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';
//const URL_POKE = "https://pokeapi.co/api/v2/pokemon?limit=500"

//declaramos el componente App como función
function App() {

  //Inicializamos el estado del componente con hooks
  const [pokes, setPokes] = useState([]);
  const [search, setSearch] = useState('');

  //hook useEffect que se ejecuta para inicializar el componente
  useEffect(() => {

    //declaramos la función asíncrona que llama al servicio  
    async function fetchPokes() {
      let p = await getPokes();
      console.log(p);
      setPokes(p);
    }

    //llamamos a la función
    fetchPokes()

  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredPokemons = pokes.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  });

  //renderizado del componente:
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Poke App</h1>
        <SearchBox
          placeholder="Búsqueda Pokemon"
          handleChange={handleChange}
        />
        <CardList pokes={filteredPokemons} />
      </header>
    </div>
  );
}

export default App;
