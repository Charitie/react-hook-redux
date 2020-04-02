import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  let classNames = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red
  }

  if (props.personsLength <= 2){
    classNames.push(classes.blue);
  }
  if (props.personsLength <= 1){
    classNames.push(classes.bold);
  }
    return (
      <div className={classes.Cockpit}>
        <h1 className={classNames.join(' ')}>{props.title}</h1>
          <button
            ref={toggleBtnRef}
            className={btnClass}
            // alt={this.state.showPersons}
            onClick={props.clicked}
            // style={myStyle}
            >Toggle Name</button>
      </div>
    )
}


export default React.memo(cockpit);
