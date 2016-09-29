import Ember from 'ember';

export default Ember.Route.extend({
  model () {
     return this.get('store').findAll('collection');
  },
  actions: {
    deleteCollection(collection) {
      collection.destroyRecord();
    },
    createCollection (data) {
      let collection = this.get('store').createRecord('collection', data);
      collection.save();
    },
    editCollection (collection) {
      this.transitionTo('collection/edit', collection);
    },
  },
});
