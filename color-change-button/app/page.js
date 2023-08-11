"use client";

import React, { useState } from 'react';
import Background_color from "./background-change";

function App() {

  const colors = ['#ffc800', '#A020F0', '#00BFFF', '#32CD32'];
  const [bgColor, setBgColor] = useState(colors[0]); 

  const changeColor = (color) => {
    setBgColor(color);
  };
  

  return (
  
      <Background_color
      
         changeColor={changeColor}
         
         bgColor={bgColor}
         
         colors={colors}
         
      />
   
  );
}
export default App;
