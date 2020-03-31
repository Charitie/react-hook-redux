import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons: [
      {id: '1', name: 'kay', age: 20},
      {id: '2', name: 'may', age: 27},
      {id: '3', name: 'kim', age: 25}
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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
          {this.state.persons.map((person, index) => {
          return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
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
