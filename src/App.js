import React, { Component } from 'react';
import Todos from './components/Todos';
import Title from './components/layout/addtitle'
import AddTodo from './components/addtodo'
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id:1,
        title: 'This is awesome',
        completed: false
      },
      {
        id:2,
        title: 'I am learning',
        completed: false
      },
      {
        id:3,
        title: 'React is the bomb',
        completed: false
      }
    ]
  };

  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
      })
    })
  }

  deleteItem = (id) =>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  render(){
    return (
      <div className="App">
        <Title />
        <AddTodo />
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
