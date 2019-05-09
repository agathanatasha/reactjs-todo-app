import React from 'react';


function ChecklistItem(props){
    return(
        <div className="todo-item">
            <input id="todo-checkbox" type="checkbox" checked={props.item.completed} onChange={()=> props.handleChange(props.item.id)}/>
            <label htmlFor="todo-checkbox">{props.item.text}</label><br/>
        </div>
        
    );
}

export default ChecklistItem;