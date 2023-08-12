function Background_color({changeColor,bgColor,colors,redCount}){

     return(
     
      <div className="App">
             <p>{redCount}</p>
    
            <div className="App-header" style={{ background: bgColor }}>
                Header Content
            
            </div>
           
            <div className="color">
           
               <div className="yellow-box">
                   <p>this is Yellow color</p>
                   <button onClick={() => changeColor(colors[0])} className="yellow">Yellow</button>
               </div> 
              
              
               <div className="purple-box">
                   <p>thiS is Purple color</p>
                   <button onClick={() => changeColor(colors[1])} className="purple">Purple</button>
               </div> 
                
                
               <div className="blue-box">
                   <p>this is Blue color</p>
                   <button onClick={() => changeColor(colors[2])} className="blue">Blue</button>
               </div> 
               
               
               <div className="green-box">
                   <p>thiS is Green color</p>
                   <button onClick={() => changeColor(colors[3])} className="green">Green</button>
               </div>
               
                
          </div>
         
           
         </div>
        
     )
}
export default Background_color;

