import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'; 
import './components/Todo.css';

const todos =[{
      task: 'Laundry',
      id: 1950,
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
      todo: [...this.state.todo, {
        task: newTodo,
        id: Date.now(),
        completed: false
      }]
    })
  }

  toggleCompleted = (todoId) => {
    this.setState({
      todo: this.state.todo.map(todo => {
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
  
  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(tasks => !tasks.completed)
    })
  }
  render() {
    return (
      <div className='Parent-App'>
        <div className='header'>
          <h1>Here's what I need to do!</h1>
          <TodoForm addTodo= {this.addTodo}/>
        </div>
        <TodoList clear={this.clearCompleted} todos={this.state.todo} toggleCompleted={this.toggleCompleted}/>
       
      </div>
    );
  }
}

export default App;
