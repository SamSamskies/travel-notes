import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Accordion, Panel } from 'react-bootstrap';
import currentUser from '../currentUser';

export default class Main extends Component {
  render() {
    return (
      <Accordion>
        <Panel header="AMOS" eventKey="1">
          <h1>AMOS' List</h1>
        </Panel>
        <Panel header="ANDY" eventKey="2">
          <h1>ANDY's List</h1>
        </Panel>
        <Panel header="EVIE" eventKey="3">
          <h1>EVIE's List</h1>
        </Panel>
      </Accordion>
    );
  }
};
