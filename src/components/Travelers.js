import React from 'react';
import { connect } from 'react-redux';
import TravelerPanel from './TravelerPanel';
import NewDestinationForm from './NewDestinationForm';

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
      <NewDestinationForm />
    </div>
  );
};

export default connect(mapStateToProps)(Travelers);