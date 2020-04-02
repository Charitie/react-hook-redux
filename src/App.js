import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from './Components/Person/Persons';
// import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium';


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
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} 
          />
        </div> 
      );
    btnClass = classes.Red;

    }

    let classNames = [];
    if (this.state.persons.length <= 2){
      classNames.push(classes.blue);
    }
    if (this.state.persons.length <= 1){
      classNames.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          
          {persons}
        </div>
    );
  }
} 
export default App;
