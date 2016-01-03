import React from 'react';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';
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
            <Glyphicon id="drawer-open-icon" glyph="menu-hamburger" onClick={handleDrawerIconClick} />
            <Glyphicon id="drawer-close-icon" glyph="menu-right" onClick={handleDrawerIconClick} />
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
            <Glyphicon glyph="user" /> {`Hello${currentUser.name ? ', ' + _s.capitalize(currentUser.name) + '!' : ''}`}
          </li>
          <li>
            <a href="/travel-notes">
              <Glyphicon glyph="log-out" /> Leave
            </a>
          </li>
        </ul>
     </nav>
   </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);