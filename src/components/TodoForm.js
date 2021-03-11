import React from "react";

class TodoForm extends React.Component{
    constructor(){
    super(); 
    this.state={
        userInput: ''
    }
    }
    handleChange = event => {
        this.setState({userInput:event.target.value})
    };
    render(){
    return(

        <form>
            <input type="text" 
            name="todoItem" 
            placeholder="...todo"
            onChange={this.handleChange} 
            value={this.state.userInput}/>
            
            <button>Add Todo</button>
            <button>Clear Completed</button>

        </form>
    )
}
}