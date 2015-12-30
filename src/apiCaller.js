import request from 'superagent-bluebird-promise';

const baseUrl = 'https://young-beyond-8772.herokuapp.com';

export default {
  login(name) {
    return request
      .post(`${baseUrl}/auth`)
      .send({ name });
  },

  getTravelers(authToken) {
    return request
      .get(`${baseUrl}/travelers`)
      .set('Authorization', `Token token=${authToken}`);
  },

  updateDestinations(destinations, authToken, userId) {
    return request
      .patch(`${baseUrl}/travelers/${userId}`)
      .send({ destinations })
      .set('Authorization', `Token token=${authToken}`)
  }
};