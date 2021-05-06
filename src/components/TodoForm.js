import React from 'react'; 

class TodoForm extends React.Component{
    constructor(){
        super(); 
        this.state={
            newTaskName: ''
        }
    }

    handleChange = event => {
        this.setState({newTaskName: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault(); 
        this.props.addTodo(this.state.newTaskName); 
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="todo" value={this.state.newTaskName} onChange={this.handleChange}/>
                <button>Add!</button>
            </form>
        )
    }
}

export default TodoForm


