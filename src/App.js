import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'; 

const todoData = [
  {       task: '',
          id: Date.now(),
          completed: false
    }
]; 

class App extends React.Component {
  constructor(){
    super(); 
    this.state = {
      todos: todoData
    }
  }
  addTodo = (todoItem) => {
    this.setState({
      todos:
      [
        ...this.state.todos,
       {
         task: todoItem,
         id: Date.now(),
         purchased: false
       }
      ]
      
    })
  }
  toggleCompleted = (todoId) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(item.id === todoId){
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }
  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.completed
      })
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.

  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
