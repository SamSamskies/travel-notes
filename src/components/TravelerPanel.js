import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';
import currentUser from '../currentUser';

export default class TravelerPanel extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      expanded: currentUser.id == this.props.id
    }
  }

  handleClick(e) {
    // TODO: Find a better way to dealing with clicks on panel header
    if (e.target.className.includes('panel-title')) {
      this.setState({ expanded: !this.state.expanded });
    }
  }

  render() {
    return (
      <Panel
        className={this.state.expanded ? 'active': ''}
        expanded={this.state.expanded}
        onClick={this.handleClick.bind(null)}
        {...this.props}>
        <ul className="list-unstyled">
          {this.props.destinations.map((d, i) => {
            let key = this.props.id + i;
            return (
              <li key={key}>
                <div className="checkbox checkbox-success">
                  <input type="checkbox" id={"checkbox" + key} checked={d.visited} readOnly />
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
