import React from 'react';

function ChecklistItem(props){
    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}/>{props.item.text}<br/>
        </div>
        
    );
}

export default ChecklistItem;