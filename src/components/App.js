import React, {Component} from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <span>Travel Notes</span>
          <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
        </header>
        <div id="main-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}