import React from 'react';
import Dice from './Dice';
import './App.css';

function App() {

  const appTitle = 'Dice App';
  const sides = 6;
  return (

    <>
    <Dice title={appTitle} diceSize={sides} />
    </>
);
}

export default App;
