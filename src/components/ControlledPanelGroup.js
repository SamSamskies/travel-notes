import React, {Component} from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import currentUser from '../currentUser';

export default class ControlledPanelGroup extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeKey: currentUser.id
    };
  }

  handleClick(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    return (
      <PanelGroup activeKey={this.state.activeKey} accordion>
        {this.props.items.map(item => {
          return (
            <Panel key={item.id} header={item.name.toUpperCase()} eventKey={item.id} onClick={this.handleClick.bind(null, item.id)} className={this.state.activeKey == item.id ? 'active' : ''}>
              <h1>{item.name}</h1>
            </Panel>
          );
        })}
      </PanelGroup>
    );
  }

};
