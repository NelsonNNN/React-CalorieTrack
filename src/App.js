import React, { Component } from 'react';
import Todos from './components/Todos'
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
        completed: true
      }
    ]
  };

  render(){
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
