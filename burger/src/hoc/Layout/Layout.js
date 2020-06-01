import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

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
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer 
          isAuth={this.props.isAuthenticated}
          open={this.state.showSiderDrawer}
          closed={this.sideDrawerHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )

  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout);
