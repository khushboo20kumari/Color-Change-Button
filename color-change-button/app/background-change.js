
function Background_color({changeColor,bgColor,colors}){

     return(
     
      <div className="App">
    
            <div className="App-header" style={{ background: bgColor }}>
                Header Content
           </div>
           
           <div className="color">
           
                <button onClick={() => changeColor(colors[0])} className="yellow">Yellow</button>
                <button onClick={() => changeColor(colors[1])} className="purple">Purple</button>
           
                <button onClick={() => changeColor(colors[2])} className="blue">Blue</button>
                <button onClick={() => changeColor(colors[3])} className="green">Green</button>
                
          </div>
           
          
           
         </div>
        
     )
}
export default Background_color;

