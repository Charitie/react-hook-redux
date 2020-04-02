import React, { Component } from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
  let classNames = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red
  }

  if (props.persons.length <= 2){
    classNames.push(classes.blue);
  }
  if (props.persons.length <= 1){
    classNames.push(classes.bold);
  }
    return (
      <div className={classes.Cockpit}>
        <h1 className={classNames.join(' ')}>Person's names</h1>
          <button
            className={btnClass}
            // alt={this.state.showPersons}
            onClick={props.clicked}
            // style={myStyle}
            >Toggle Name</button>
      </div>
    )
}


export default cockpit;
