import P from 'bluebird';
import { TRAVELERS } from './mockedApiResponse';

const DELAY_DEFAULT = 200;

export default {
  login(name) {
    return P.delay(DELAY_DEFAULT)
      .then(() => {
        let user = TRAVELERS.find(t => t.name.toLowerCase() === name.toLowerCase());

        if (user) return user;
        else throw new Error('Invalid user');
      });
  },

  getTravelers() {
    return P.delay(DELAY_DEFAULT).return(TRAVELERS);
  },

  updateDestinations(destinations) {
    return P.delay(DELAY_DEFAULT).return(destinations);
  }
};