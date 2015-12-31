import React from 'react';
import { connect } from 'react-redux';
import { Input, ButtonInput } from 'react-bootstrap';
import TravelerPanel from './TravelerPanel';

const mapStateToProps = ({ reducer: state }) => {
  return {
    isLoading: state.isLoading,
    travelers: state.travelers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (e, destinationName) => {
      e.preventDefault();
    }
  }
}

const Travelers = ({ isLoading, travelers, handleSubmit }) => {
  let input;

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
      <form className="new-destination-form" onSubmit={e => handleSubmit(e, input.getValue())}>
        <Input ref={node => input = node} type="text" label="New Destination" placeholder="Enter a location" />
        <ButtonInput
          type="submit"
          bsStyle="primary"
          disabled={isLoading}
          block>
          {isLoading ? 'Adding new destination...' : 'Add new destination'}
        </ButtonInput>
      </form>
    </div>
  );
};

export default connect(mapStateToProps)(Travelers);