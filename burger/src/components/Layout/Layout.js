import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
  state = {
    showSiderDrawer: false 
  }

  sideDrawerHandler = () => {
    this.setState({showSiderDrawer: false })
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSiderDrawer: !prevState.showSiderDrawer};
    })
  }
  render(){
    return (
      <Aux>
        <Toolbar 
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer   
          open={this.state.showSiderDrawer}
          closed={this.sideDrawerHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )

  }
}

export default Layout;
