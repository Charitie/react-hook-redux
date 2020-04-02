import React from 'react';
import personStyle from './Person.module.css';

const Person = (props) => {
 
  return (
    <div className={personStyle.person}>
      <p onClick={props.click}> I'm {props.name} with {props.age} years</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
}

export default Person;