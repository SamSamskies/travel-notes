import React, {Component} from 'react';
import TravelerPanel from './TravelerPanel';

export default class Travelers extends Component {
  componentDidMount() {
    this.store = this.context.store;
    this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const { travelers, panelOpenForUserId } = store.getState().reducer;

    return (
      <div>
        {travelers.map(t => {
          const userId = t.id;

          return (
            <TravelerPanel
              key={userId}
              userId={userId}
              className={panelOpenForUserId[userId] ? 'active' : ''}
              header={t.name.toUpperCase()}
              eventKey={userId}
              collapsible
              expanded={panelOpenForUserId[userId] || false}
              destinations={t.destinations}
              needToSave={t.needToSave}
            />
          );
        })}
      </div>
    );
  }
};

Travelers.contextTypes = {
  store: React.PropTypes.object
}
