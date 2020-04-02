import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from './Components/Person/Persons';
import Cockpit from './Components/Cockpit/Cockpit';
import withClass from './hoc/withClass';
import Aux from './hoc/Aux';


class App extends Component{
  constructor(props){
    super(props);
    console.log('[App.js] constructor' )
  }
  state = {
    persons: [
      {id: '1', name: 'kay', age: 20},
      {id: '2', name: 'may', age: 23},
      {id: '3', name: 'kim', age: 25}
    ],                                        
    otherStates: 'some value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter +1
      }
    });

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
    // console.log('[App.js] render')
   
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} 
          />; }

 

    return (
        <Aux classes={classes.App}>
          <button
            onClick={() => {
              this.setState({ showCockpit: false });
              }}
          >
            Remove Cockpit
          </button>
            { this.state.showCockpit ? <Cockpit 
              title={this.props.appTitle}
              showPersons = {this.state.showPersons}
              personsLength = {this.state.persons.length}
              clicked = {this.togglePersonsHandler}
            /> : null}
            {persons}
        </Aux>
    );
  }
} 
export default withClass(App, classes.App);
