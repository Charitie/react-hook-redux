import React from 'react';
import personStyle from './Person.module.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import PropTypes from 'prop-types';


class Person extends React.Component{ 
  componentDidMount() {
    this.inputElement.focus();
  }
  render(){
    return (
      <Aux>
        <div className={personStyle.person}>
          <p onClick={this.props.click}> I'm {this.props.name} with {this.props.age} years</p>
          <p>{this.props.children}</p>
          <input 
            ref={(inputEl) => {this.inputElement = inputEl}}
            type="text"
            onChange={this.props.changed} 
            value={this.props.name}
          />
        </div>
     </Aux>
    );

  }
} 
 
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.person);