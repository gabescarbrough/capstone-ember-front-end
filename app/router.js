import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('collections');
  this.route('collection', { path: 'collections/:collection_id' });
  this.route('collection/edit', { path: 'collections/:collection_id/edit' });
});

export default Router;
