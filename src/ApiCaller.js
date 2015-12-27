import request from 'superagent-bluebird-promise';

export default class ApiCaller {
  constructor() {
    this.baseUrl = 'https://young-beyond-8772.herokuapp.com';
  }

  login(name) {
    return request
      .post(`${this.baseUrl}/auth`)
      .send({ name });
  }

  getTravelers(authToken) {
    return request
      .get(`${this.baseUrl}/travelers`)
      .set('Authorization', `Token token=${authToken}`);
  }

  updateDestinations(destinations, authToken, userId) {
    return request
      .patch(`${this.baseUrl}/${userId}`)
      .send({ destinations })
      .set('Authorization', `Token token=${authToken}`);
  }
};