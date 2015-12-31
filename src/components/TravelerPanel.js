import React from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import DestinationListItem from './DestinationListItem';
import { handleTravelerPanelClick, handleDestinationToggle } from '../actions';

const mapStateToProps = ({ reducer: state }) => {
  return {
    currentUser: state.currentUser,
    panelOpenForUserId: state.panelOpenForUserId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePanelClick: userId => {
      dispatch(handleTravelerPanelClick(userId));
    },
    handleDestinationToggle: (userId, currentUser, destinationName, destinations) => {
      const updatedDestinations = destinations.map(d => {
        if (d.name.toLowerCase() !== destinationName.toLowerCase()) return d;
        return Object.assign({}, d, { visited: !d.visited });
      });
      dispatch(handleDestinationToggle(userId, currentUser, updatedDestinations));
    }
  }
}

const TravelerPanel = props => {

  const {
    userId,
    currentUser,
    panelOpenForUserId,
    header,
    destinations,
    handlePanelClick,
    handleDestinationToggle
  } = props;

  return (
    <Panel
      className={panelOpenForUserId[userId] ? 'active' : ''}
      header={header}
      eventKey={userId}
      collapsible
      expanded={panelOpenForUserId[userId] || false}
      onClick={() => handlePanelClick(userId)}
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
              onChange={() => handleDestinationToggle(userId, currentUser, d.name, destinations)}
            />
          );
        })}
      </ul>
    </Panel>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TravelerPanel);

