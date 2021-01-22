
import React from 'react';



const ToDoItem = ( {item, onChecked, id}) => {

    return (
        <div onClick={() => onChecked(id)}>
            <li>{item}</li>
        </div>
    )

}

export default ToDoItem;