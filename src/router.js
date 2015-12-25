import Backbone from 'backbone';

export default Backbone.Router.extend({

  routes: {
    '': 'redirect',
    'start': 'showStart',
    'travelers': 'showTravelers'
  },

  redirect() {
    this.navigate('/start', { trigger: true });
  },

  showStart() {
    console.log('start');

  },

  showTravelers() {
    console.log('travelers');
  }

});