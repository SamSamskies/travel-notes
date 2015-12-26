import request from 'superagent';
import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';
import ControlledPanelGroup from './ControlledPanelGroup';
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
      <ControlledPanelGroup items={this.state.travelers} />
    );
  }
};
