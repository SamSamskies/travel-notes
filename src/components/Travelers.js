import React, {Component} from 'react';
import { connect } from 'react-redux';
import TravelerPanel from './TravelerPanel';

const mapStateToProps = ({ reducer: state }) => {
  return {
    travelers: state.travelers,
    panelOpenForUserId: state.panelOpenForUserId
  }
}

const Travelers = ({ travelers, panelOpenForUserId }) => {
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
};

export default connect(mapStateToProps)(Travelers);