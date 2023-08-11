"use client"
import React, { useState } from 'react';
function App() {
  const colors = ['#ffc800', '#A020F0', '#00BFFF', '#32CD32'];
  const [bgColor, setBgColor] = useState(colors[0]); 

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App">
      <button onClick={() => changeColor(colors[0])}>Yellow</button>
      <button onClick={() => changeColor(colors[1])}>Purple</button>
      <button onClick={() => changeColor(colors[2])}>Blue</button>
      <button onClick={() => changeColor(colors[3])}>Green</button>
      <div className="App-header" style={{ background: bgColor }}>
        Header Content
      </div>
    </div>
  );
}
export default App;
