import React, { Component } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';

function Header () {
  return (
    <header style={{textAlign: 'center', color: 'white', fontSize: '1.5em'}}>
      <h1>Pokedex</h1>
    </header>
  )
}

class App extends Component {
  render() {
    return (<main>
      <Header />
      <Pokedex />
    </main>
    )
  }
}

export default App;
