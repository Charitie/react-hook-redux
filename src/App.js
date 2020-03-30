import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons: [
      {name: 'kay', age: 20},
      {name: 'may', age: 27},
      {name: 'kim', age: 25}

    ],
    otherStates: 'some value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log("was clicked")
    this.setState({persons: 
    [
      {name: newName, age: 20},
      {name: 'may', age: 27},
      {name: 'mark', age: 25}
    ]})
  }

  nameChangeHandler = event => {
    this.setState( {
      persons: [
      {name: 'roy', age: 20},
      {name: event.target.value, age: 27},
      {name: 'mark', age: 15}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} 
                  age={this.state.persons[1].age} 
                  click={this.switchNameHandler}
                  changed={this.nameChangeHandler}
          >my hoby is: sleeping</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div> 
      )
    }
    return (
      <div className="App">
        <h1>Person's names</h1>
        <button onClick={this.togglePersonsHandler}>Toggle Name</button>
        {persons}
      </div>
    );
  }
} 
export default App;
