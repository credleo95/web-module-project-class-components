import React from 'react'; //


const Todo = props => {

    const {toggleCompleted, todo} = props
    const handleClick = event => {
        event.preventDefault(); 
        toggleCompleted(todo.id); 
    }
    return (
        <div onClick={handleClick} className={`task${todo.completed ? ' completed' : ''}`}>
            <p>{todo.task}</p>
        </div>
    )
}
export default Todo; 