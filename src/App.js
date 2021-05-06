import React from 'react';


const todos =[{
      task: '',
      id: null,
      completed: false
}]
class App extends React.Component {
  constructor(){
    super(); 
    this.state = {
      todo: todos
    }
  }
  addTodo = newTodo => {
    this.setState({
      todo: [...this.state.todos, {
        task: newTodo,
        id: Date.now(),
        completed: false
      }]
    })
  }
  toggleCompleted = todoId => {
    this.setState({
      todo: this.state.todos.map(todo => {
        if (todo.id === todoId){
          return {
            ...todo,
            completed:!todo.completed
          }
        }
        return todo; 
      })
    })
  }

  clearPurchased = () => {
    this.setState({
      todo: this.state.todos.filter(tasks => !tasks.completed)
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
