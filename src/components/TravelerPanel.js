import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';
import DestinationListItem from './DestinationListItem';
import apiCaller from '../apiCaller';

export default class TravelerPanel extends Component {
  componentDidMount() {
    this.store = this.context.store;
  }

  componentDidUpdate() {
    const { destinations, needToSave } = this.props;

    if (needToSave) {
      this._saveDestinations(destinations);
    }
  }

  render() {
    const { store } = this.context;
    const { currentUser } = store.getState().reducer;
    const { userId, destinations } = this.props;

    return (
      <Panel
        onClick={() => this._handlePanelClick(userId)}
        {...this.props}
      >
        <ul className="list-unstyled" onClick={e => e.stopPropagation()}>
          {destinations.map((d, i) => {
            const key = `${userId}-${i}`;
            const authToken = currentUser.token;

            return (
              <DestinationListItem
                key={key}
                id={`destination-list-item-${key}`}
                isChecked={d.visited}
                isDisabled={userId != currentUser.id}
                label={d.name}
                onChange={() => this._handleDestinationToggle(d.name, userId)}
              />
            );
          })}
        </ul>
      </Panel>
    );
  }

  _handlePanelClick(userId) {
    this.store.dispatch({ type: 'TRAVELER_PANEL_CLICKED', userId });
  }

  _handleDestinationToggle(destinationName, userId) {
    this.store.dispatch({
      type: 'DESTINATION_TOGGLE',
      userId,
      name: destinationName
    });
  }

  _saveDestinations(destinations) {
    const { currentUser } = this.store.getState().reducer;

    return apiCaller.updateDestinations(destinations, currentUser.token, currentUser.id)
      .then(res => {
        console.log(res.body)
        this.store.dispatch({
          type: 'DESTINATION_SAVED',
          destinations: res.body.destinations
        });
      });
  }
};

TravelerPanel.contextTypes = {
  store: React.PropTypes.object
}
