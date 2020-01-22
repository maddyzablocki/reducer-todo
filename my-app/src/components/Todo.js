import React from 'react';

export function Todo(props) {
    return(
        <div
         className={`item${props.item.completed ? "completed": ''}`}
        onClick={(e) => 
            props.handleComplete(props.item.id)}
        >
            <p className="completed">{props.item.todo}</p>
        </div>
    );
};

export default Todo;


