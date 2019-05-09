import React from 'react';


function ChecklistItem(props){
    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={()=> props.handleChange(props.item.id)}/>{props.item.text}<br/>
        </div>
        
    );
}

export default ChecklistItem;