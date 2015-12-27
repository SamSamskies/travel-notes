import request from 'superagent';

export default class ApiCaller {
  constructor(store) {
    this.baseUrl = 'https://young-beyond-8772.herokuapp.com';
    this.store = store;
  }

  login(name) {
    request
      .post(`${this.baseUrl}/auth`)
      .send({ name })
      .end((err, res) => {
        if (err) return // just ignore errors for now;

        const data = Object.assign({}, res.body, { type: 'LOGGED_IN' });

        this.store.dispatch(data);
      });

  }
};