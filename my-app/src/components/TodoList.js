import React from 'react'
import { Todo } from './Todo';

export const TodoList = props => {
    return (
        <div className="task-list">
            {props.state.map(item => (
                <Todo key={item.id} item={item} handleComplete={props.handleComplete} />
            ))}
        </div>
    )
}