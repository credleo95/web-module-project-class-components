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
         completed: false
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

  render() {
    return (
      <div className="parent-container">
        <h1>What do I need to do?</h1>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
