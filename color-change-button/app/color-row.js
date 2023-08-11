import Rating from "./rating";

function Color_row({color,onLike,count}){
   return(
   
      <div className="row-color">
     
        <div className="colum">
        
           <p>{color.id}</p>
           <p>{color.context}</p>
           <Rating 
           
               onLike={onLike}
               count={count}
               
           />
           
           
           
         </div>
         
      </div>
   )
}
export default Color_row;
