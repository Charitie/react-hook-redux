import React from 'react';
import burgerLogo from './logo.png';
import classes from './Logo.module.css';

const Logo = () => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="burgerLogo"/>
  </div>
)

export default Logo
