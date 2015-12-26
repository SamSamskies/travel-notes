import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';
import currentUser from '../currentUser';

export default class TravelerPanel extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.toggleDestination = this.toggleDestination.bind(this);

    const isPanelForCurrentUser = currentUser.id == this.props.id;
    this.state = {
      isPanelForCurrentUser,
      expanded: isPanelForCurrentUser,
    }
  }

  handleClick(e) {
    // TODO: Find a better way for dealing with clicks on panel header
    if (e.target.className.includes('panel-title')) {
      this.setState({ expanded: !this.state.expanded });
    }
  }

  toggleDestination(destinationName) {
    const updatedDestinations = this.props.destinations.map(d => {
      if (d.name === destinationName) return {
        name: d.name,
        visited: !d.visited
      }

      return d;
    });
    this.props.updateDestinations(updatedDestinations)
  }

  render() {
    const destinations = this.props.destinations;

    return (
      <Panel
        className={this.state.expanded ? 'active': ''}
        expanded={this.state.expanded}
        onClick={this.handleClick.bind(null)}
        {...this.props}>
        <ul className="list-unstyled">
          {destinations.map((d, i) => {
            const key = this.props.id + i;
            return (
              <li key={key}>
                <div className="checkbox checkbox-success">
                  <input type="checkbox" id={"checkbox" + key} checked={d.visited} disabled={!this.state.isPanelForCurrentUser} onChange={this.toggleDestination.bind(null, d.name)} />
                  <label htmlFor={"checkbox" + key}>
                    {d.name}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </Panel>
    );
  }

};
