import React from 'react'; //


const Todo = props => {
    const handleClick = event => {
        event.preventDefault(); 
        props.toggleCompleted(props.todo.id); 
    }
    return (
        <div onClick={handleClick} className={`item${props.todo.purchased ? ' completed' : ''}`}>
            <p>{props.todo.task}</p>
        </div>
    )
}
export default Todo; 