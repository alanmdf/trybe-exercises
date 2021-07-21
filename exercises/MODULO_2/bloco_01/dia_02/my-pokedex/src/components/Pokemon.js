import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    const { name, type, avgWeight, img } = this.props;
    return (
      <div className='pokemon-card'>
        <img src={img} alt=''/>
        <p>Nome: {name}</p>
        <p>Tipo: {type}</p>
        <p>Peso médio: {avgWeight.value} {avgWeight.measurementUnit}</p>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  avgWeight: PropTypes.number.isRequired,
  img: PropTypes.string
}

export default Pokemon;