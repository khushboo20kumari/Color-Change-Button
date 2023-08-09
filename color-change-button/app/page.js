"use client";
import React, { useState } from 'react'
import Data from './data';
import Color_row from './color-row';
function Page(){

    const [item,SetItem]=useState(Data);
    console.log(item)

    return(
    
        <div className="main-row">
           
           {item.map((color)=>(
               
             <div key={color.id}>
             
                 <Color_row color={color} />
                 
             </div>
               
           ))}
           
           
          
        </div>
        
    );
}

export default Page;

