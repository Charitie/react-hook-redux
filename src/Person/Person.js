import React from 'react';
import './Person.css';
import styled from 'styled-components';

// import Radium from 'radium';

// const StyledDiv = styled.div`

//     width: 60%;
//     margin: auto;
//     border: 1px solid lightblue;
//     box-shadow: 2px 2px 3px 1px #000;
//     padding: 16px;
//     text-align: center;
//     color: green;
// `

const Person = (props) => {
 
  return (
    <div className="person"
    //  style={personStyle} 
     >
      <p onClick={props.click}> I'm {props.name} with {props.age} years</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
}

export default Person;