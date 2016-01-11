import React from 'react';
import { connect } from 'react-redux';
import { ButtonInput } from 'react-bootstrap';
import Geosuggest from 'react-geosuggest';
import { addNewDestination } from '../actions';

const mapStateToProps = ({ reducer: state }) => {
  return {
    isLoading: state.isLoading,
    currentUser: state.currentUser,
    travelers: state.travelers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (e, currentUser, travelers, destinationName) => {
      e.preventDefault();

      // Silently fail if button clicked, with no input
      if (!destinationName) return;

      const traveler = travelers.find(t => t.id == currentUser.id);
      dispatch(addNewDestination(currentUser, destinationName, traveler.destinations));
    }
  }
}

const NewDestinationForm = ({ isLoading, currentUser, travelers, handleSubmit }) => {
  let destinationName;
  let geosuggest;

  return (
    <form
      className="new-destination-form"
      onSubmit={e => {
        handleSubmit(e, currentUser, travelers, destinationName);
        geosuggest.clear();
      }}
    >
      <label>New Destination</label>
      <Geosuggest
        ref={node => geosuggest = node}
        placeholder="Enter a location"
        types={["(cities)"]}
        onChange={val => destinationName = val}
        onSuggestSelect={s => {
          const [ shortDestinationName ] = s.label.split(',');
          geosuggest.update(shortDestinationName);
        }}
      />
      <ButtonInput
        type="submit"
        bsStyle="primary"
        disabled={isLoading}
        block
      >
        {isLoading ? 'Adding new destination...' : 'Add new destination'}
      </ButtonInput>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDestinationForm);