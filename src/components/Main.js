import request from 'superagent';
import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';
import CollapsiblePanel from './CollapsiblePanel';
import currentUser from '../currentUser';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      travelers: []
    };
    request
      .get('https://young-beyond-8772.herokuapp.com/travelers')
      .set('Authorization', 'Token token=' + currentUser.get('token'))
      .end((err, res) => {
        if (err) return // just ignore errors for now;
        this.setState({ travelers: res.body });
      });
  }

  render() {
    return (
      <div>
        {this.state.travelers.map(item => {
          return (
            <CollapsiblePanel id={item.id} key={item.id} header={item.name.toUpperCase()} eventKey={item.id} collapsible={true}>
              <h1>{item.name}</h1>
            </CollapsiblePanel>
          );
        })}
      </div>
    );
  }
};
