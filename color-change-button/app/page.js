"use client";

import React, { useState } from 'react';
import Background_color from "./background-change";

function App() {

  const colors = ['#ffc800', '#A020F0', '#00BFFF', '#32CD32'];
   
  const [redCount,setRedCount]=useState(0);
  const [blueCount,setCount]=useState(0);
  const [yellowCount,setYellowCount]=useState(0);
  const [greenCount,setGreenCount]=useState(0);
  const [bgColor, setBgColor] = useState(colors[0]); 
  
  

  const changeColor = (color) => {
    setBgColor(color);
    setRedCount(redCount+1)
    
  };
  
  return (
  
      <Background_color
      
         changeColor={changeColor}
         
         bgColor={bgColor}
         
         colors={colors}
         
         redCount={redCount}
         
      />
   
  );
}
export default App;
