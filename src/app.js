import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import MainNavbar from './components/MainNavbar';

const router = new Router();
Backbone.history.start({ pushState: true });

const page = document.referrer.split('/').pop();
if (page === '404.html') router.redirect();

ReactDOM.render(<MainNavbar />, document.querySelector('#nav-container'));



