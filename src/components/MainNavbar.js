import React, {Component} from 'react';

export default class MainNavbar extends Component {
  render() {
    return (
      <nav>
        <span>Travel Notes</span>
        <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
      </nav>
    );
  }
}