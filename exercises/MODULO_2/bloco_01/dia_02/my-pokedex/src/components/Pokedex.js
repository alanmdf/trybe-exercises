import React, { Component } from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';
import pokemons from '../data';

class Pokedex extends Component {
  render() {
    return (
    <div className='pokedex'>
      { pokemons.map(({ id , name, type, averageWeight, image }) => 
        <Pokemon 
          key={ id } 
          name={ name }
          type={ type }
          avgWeight= { averageWeight }
          img={ image } 
        />) }
    </div>
    )
  }
}

export default Pokedex;