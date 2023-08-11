
function Rating({onLike,count}){

   return(
   
      <div>
         <p>{count}</p>
         <button onClick={onLike}>Like</button>
      </div>
   )
}
export default Rating;



