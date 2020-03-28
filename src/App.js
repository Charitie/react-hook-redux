import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons: [
      {name: 'kay', age: 20},
      {name: 'may', age: 27},
      {name: 'kim', age: 25}

    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Person's names</h1>
        <button>Switching Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

      </div>
    );
  }
} 
export default App;
