import request from 'superagent';
import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';
import TravelerPanel from './TravelerPanel';
import currentUser from '../currentUser';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      travelers: []
    };
    this.updateDestinations = this.updateDestinations.bind(this);
    request
      .get('https://young-beyond-8772.herokuapp.com/travelers')
      .set('Authorization', 'Token token=' + currentUser.get('token'))
      .end((err, res) => {
        if (err) return // just ignore errors for now;
        this.setState({ travelers: res.body });
      });
  }

  updateDestinations(destinations) {
    request
      .patch('https://young-beyond-8772.herokuapp.com/travelers/' + currentUser.id)
      .send({ destinations })
      .set('Authorization', 'Token token=' + currentUser.get('token'))
      .end((err, res) => {
        if (err) return // just ignore errors for now;
        const travelers = this.state.travelers.map(t => {
          if (t.id === res.body.id) {
            t.destinations = res.body.destinations;
          }
          return t;
        });
        this.setState({ travelers });
      });
  }

  render() {
    return (
      <div>
        {this.state.travelers.map(item => {
          return (
            <TravelerPanel
              id={item.id}
              key={item.id}
              header={item.name.toUpperCase()}
              eventKey={item.id}
              collapsible={true}
              destinations={item.destinations}
              updateDestinations={this.updateDestinations} />
          );
        })}
      </div>
    );
  }
};
