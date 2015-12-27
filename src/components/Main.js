import request from 'superagent';
import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';
import TravelerPanel from './TravelerPanel';

export default class Main extends Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.props;
    const { travelers } = store.getState();

    return (
      <div>
        {travelers.map(item => {
          return (
            <TravelerPanel
              id={item.id}
              key={item.id}
              header={item.name.toUpperCase()}
              eventKey={item.id}
              collapsible={true}
              destinations={item.destinations}
              updateDestinations={() => alert('Refactor in progress')} />
          );
        })}
      </div>
    );
  }
};
