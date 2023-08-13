"use client";

import React, { useState } from 'react';
import Background_color from "./background-change";

function App() {

  const colors = ['#ffc800', '#A020F0', '#00BFFF', '#32CD32'];
  
  const [yellowLike, setYellowLike] = useState(0);
  const [blueLike,setBlueLike]=useState(0);
  
  const [greenLike,setGreenLike]=useState(0);
  
  const [purpleLike,setPurpleLike]=useState(0);
  
  
  
  
  const [bgColor, setBgColor] = useState(colors[0]); 
  
  
 
  
  const changeColor = (color) => {
  
    setBgColor(color);
     
    
  };
  
  const onYellowEvent=()=>{
      setYellowLike(yellowLike+1)
  }
  
  const onBlueEvent=()=>{
     setBlueLike(blueLike+1)
  }
  
  const onGreenEvent=()=>{
     setGreenLike(greenLike+1)
  }
  
  const onPurpleEvent=()=>{
     setPurpleLike(purpleLike+1)
  }
  return (
  
      <Background_color
      
         changeColor={changeColor}
         
         bgColor={bgColor}
         
         colors={colors}
         onYellowEvent={onYellowEvent}
         
         yellowLike={yellowLike}
         
         onBlueEvent={onBlueEvent}
         
         blueLike={blueLike}
         
         onGreenEvent={ onGreenEvent}
         greenLike={greenLike}
         
         onPurpleEvent={onPurpleEvent}
                      
         purpleLike={purpleLike}
         
         
         
         
         
      
         
        
        
         
      />
   
  );
}
export default App;
