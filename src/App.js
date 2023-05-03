import './App.css';
import { randomizeBgColors } from 'background-color-randomizer';
import randomColorRGB from 'random-color-rgb';
import React, { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <div>
        <div>color:</div>
        <br />
        <button className="button"> Generate color</button>
        <div className="input">
          <br />
          <div>hue:</div>
          <input type="input" placeholder="Hex input" />
          <div>Luminosity:</div>
          <input type="input" placeholder="Hex input" />
        </div>
      </div>
    </div>
  );
}
