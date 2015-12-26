import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';
import currentUser from '../currentUser';

export default class CollapsiblePanel extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      expanded: currentUser.id == this.props.id
    }
  }

  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <Panel
        className={this.state.expanded ? 'active': ''}
        expanded={this.state.expanded}
        onClick={this.handleClick.bind(null)}
        {...this.props}>
        {this.props.children}
      </Panel>
    );
  }

};
