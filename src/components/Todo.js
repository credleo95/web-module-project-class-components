import React from 'react'; 

const Todo = props => {
    return (
        <div>
            <p onClick={() => props.toggleCompleted(props.todo.id)} className={`${props.todo.completed ? ' completed' : ''}`}>{props.todo.task}</p>
        </div>
    )
}

export default Todo 