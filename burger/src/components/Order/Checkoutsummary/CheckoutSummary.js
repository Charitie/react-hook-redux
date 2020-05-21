import React from 'react';
import Burger from '../../Burger/Burger';
import Button  from '../../Navigation/'
import classes from './CheckoutSummary.module.css';

function CheckoutSummary(props) {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{width: '300px', height: '300px', margin: 'auto'}}>
        <Burger  ingredients={props.ingredients}/>
      </div>
      <Button />
    </div>
  )
}

export default CheckoutSummary;
