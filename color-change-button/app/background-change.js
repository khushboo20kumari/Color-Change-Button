function Background_color({changeColor,bgColor,colors,yellowLike,onYellowEvent,onBlueEvent,blueLike,onGreenEvent,greenLike,onPurpleEvent,purpleLike}){

     return(
     
      <div className="App">
           
    
            <div className="App-header" style={{ background: bgColor }}>
                Header Content
            
            </div>
           
           
           <div>
              <p>count:{yellowLike}</p>
              <p>count blue :{blueLike}</p>
              <p>count:{greenLike}</p>
              <p>count purpleLike:{purpleLike}</p>
              
           </div>   
          
                      
            <div className="color">
                
               <div className="yellow-box">
                   <p>this is Yellow color</p>
                   <button onClick={() => changeColor(colors[0])} onClick={onYellowEvent}  className="yellow">Yellow</button>
               </div> 
              
              
               <div className="purple-box">
                   <p>thiS is Purple color</p>
                   <button onClick={() => changeColor(colors[1])}  onClick={onPurpleEvent}  className="purple">Purple</button>
               </div> 
                
                
               <div className="blue-box">
                   <p>this is Blue color</p>
                   <button onClick={() => changeColor(colors[2])} onClick={onBlueEvent} className="blue">Blue</button>
               </div> 
               
               
               <div className="green-box">
                   <p>thiS is Green color</p>
                   <button onClick={() => changeColor(colors[3])} onClick={onGreenEvent} className="green">Green</button>
               </div>
               
                
          </div>
         
           
         </div>
        
     )
}
export default Background_color;

