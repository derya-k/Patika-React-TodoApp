import React, { useState } from "react";
import "./TodoItem.css";


function Todo(props) {
  const { id, content } = props;
 
  const [complete,setComplete]=useState(false)
  
  const checked=()=>{
    setComplete(!complete)
  }
  //<span >X</span>
    return (
      <div onClick={checked} className={ complete ? "complete" : "" } >
        
        
        <button onClick={()=>props.deleteItem(id)} className="delete-btn" >X</button>
        { content } 
        
        
      </div>
    )
  
    
 
  
}

export default Todo;
