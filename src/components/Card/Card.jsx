import React from 'react';
import './Card.css';


const Card = ({ poke }) => {
  return (
    <div className="card">
      <a href={`https://www.pokemon.com/us/pokedex/${poke.name}`} target="_blank" rel="noreferrer">
        <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${poke.name}.jpg`} />
        <h3>{poke.name[0].toUpperCase() + poke.name.slice(1)}</h3>
      </a>
    </div>);
}

export default Card;