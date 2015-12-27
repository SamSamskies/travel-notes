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
    const { travelers, panelOpenForUserId, currentUser } = store.getState();

    return (
      <div>
        {travelers.map(t => {
          const userId = t.id;
          return (
            <TravelerPanel
              id={t.id}
              key={t.id}
              header={t.name.toUpperCase()}
              eventKey={t.id}
              collapsible={true}
              destinations={t.destinations}
              expanded={panelOpenForUserId[t.id] || false}
              onTravelerPanelClick={() => {
                store.dispatch({ type: 'TRAVELER_PANEL_CLICKED', userId });
              }}
              updateDestinations={() => alert('Refactor in progress')} />
          );
        })}
      </div>
    );
  }
};
