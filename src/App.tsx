import { useState } from 'react'
import './App.css'

import Passphrase from './Passphrase';
import { PassphraseLookup } from './PassphraseLookup';
import { DiceComponentContainer } from './DiceComponentContainer';

const DICE_ROLLS = 6;
const NUMBER_OF_DICE = 5;

// helper
const randomDiceNumber = () => { return Math.floor(Math.random() * DICE_ROLLS) + 1; }
const rollTheDices = () => Array.from({ length: NUMBER_OF_DICE }, () => randomDiceNumber());

function App() {
  const [diceValues, setDiceValues] = useState(Array.from({ length: DICE_ROLLS }, () => Array.from({ length: NUMBER_OF_DICE }, () => 0)));
  const [phrases, setPhrases] = useState(Array.from({ length: DICE_ROLLS }, () => ""));

  const updateDiceValues = (index: number) => {
    const copyValues = [...diceValues];
    copyValues[index] = rollTheDices();
    setDiceValues(copyValues);
    const phrasesCopy = [...phrases];
    phrasesCopy[index] = PassphraseLookup(copyValues[index].join(""));
    setPhrases(phrasesCopy);
  };

  return (
    <div className="App">
      <h1>EFF Dice-Generated Passphrases</h1>
      <p>This small app implements the idea presented <a href='https://www.eff.org/dice'>here</a></p>
      <DiceComponentContainer diceValues={diceValues} onUpdateDiceRoll={(index) => updateDiceValues(index)} />
      <Passphrase phrases={phrases}></Passphrase>
    </div>
  )
}

export default App;