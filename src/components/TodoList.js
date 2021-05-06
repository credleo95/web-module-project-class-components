// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'; 
import Todo from './Todo'; 

const TodoList = props => {
const {clear, todos, toggleCompleted } = props 

    return(
        <div>
            {todos.map(todo => (
    <Todo toggleCompleted={toggleCompleted} key={todo.id} todo={todo}/>
            ))}
            <button onClick={clear} className="clear-button">
                Clear Completed
            </button>
        </div>
    )
}
export default TodoList 