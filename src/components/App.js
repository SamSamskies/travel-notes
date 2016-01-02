import React from 'react';
import { connect } from 'react-redux';
import { toggleDrawer } from '../actions';
import _s from 'underscore.string';

const mapStateToProps = ({ reducer: state }) => {
  return {
    isDrawerOpen: state.isDrawerOpen,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDrawerIconClick: () => {
      dispatch(toggleDrawer());
    }
  }
}

const App = ({ isDrawerOpen, currentUser, handleDrawerIconClick, children }) => {
  return (
    <div id="main-container" className={isDrawerOpen ? 'drawer-open' : ''}>
      <div id="layout">
        <header>
          <h2>Travel Notes</h2>
          <div id="drawer-icon-container">
            <span className="glyphicon glyphicon-menu-hamburger" onClick={handleDrawerIconClick}></span>
            <span className="glyphicon glyphicon-menu-right" onClick={handleDrawerIconClick}></span>
          </div>
        </header>
        <div id="content-container">
          {children}
        </div>
      </div>
      <nav id="drawer">
        <header>
          <h2>Travel Notes</h2>
        </header>
        <ul className="list-unstyled">
          <li>
            <span className="glyphicon glyphicon-user"></span>
            <span>{`Hello${currentUser.name ? ', ' + _s.capitalize(currentUser.name) + '!' : ''}`}</span>
          </li>
          <li>
            <a href="/">
              <span className="glyphicon glyphicon-log-out"></span>
              <span>Leave</span>
            </a>
          </li>
        </ul>
     </nav>
   </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);