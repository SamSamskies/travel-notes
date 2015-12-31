import React, {Component} from 'react';
import { connect } from 'react-redux';
import TravelerPanel from './TravelerPanel';

const mapStateToProps = ({ reducer: state }) => {
  return {
    travelers: state.travelers
  }
}

const Travelers = ({ travelers }) => {
  return (
    <div>
      {travelers.map(t => {
        const userId = t.id;

        return (
          <TravelerPanel
            key={userId}
            userId={userId}
            header={t.name.toUpperCase()}
            destinations={t.destinations}
          />
        );
      })}
    </div>
  );
};

export default connect(mapStateToProps)(Travelers);