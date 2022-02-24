import React from 'react';
import Card from '../Card/Card';

const CardList = ({ pokes }) => {
  return (
    <div className='card-list' >
      {pokes.map(poke =>

        <Card poke={poke} key={poke.url} />
      )}
    </div>
  )
};

export default CardList;