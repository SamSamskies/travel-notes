const Backbone = require('backbone');
const Router = Backbone.Router.extend({

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

const router = new Router();
Backbone.history.start({ pushState: true });

const page = document.referrer.split('/').pop();
if (page === '404.html') router.redirect();


