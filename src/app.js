import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import MainNavbar from './components/MainNavbar';

// Just need to import to initialize router
import router from './router';

Backbone.history.start({ pushState: true });

const page = document.referrer.split('/').pop();
if (page === '404.html') router.redirect();

ReactDOM.render(<MainNavbar />, document.querySelector('#nav-container'));



