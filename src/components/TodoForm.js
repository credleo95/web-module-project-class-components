import React from "react";

class TodoForm extends React.Component{
    constructor(){
    super(); 
    this.state= {
         userTodo: ''
       }
    }
    handleChange = event => {
        this.setState({userTodo: event.target.value})
    };
    todoSubmit = event => {
        event.preventDefault(); 
        this.props.addTodo(this.state.userTodo)

    }
    render(){
    return(
    <div>
        <form onSubmit = {this.todoSubmit}>
            <input type="text" 
            name="todoItem" 
            placeholder="...todo"
            onChange={this.handleChange} 
            value={this.state.userTodo}/>

            <button>Add Todo</button>
            <button>Clear Completed</button>

        </form>
   </div>
    )
}
}

export default TodoForm;
