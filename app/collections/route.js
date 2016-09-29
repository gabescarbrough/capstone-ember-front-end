import Ember from 'ember';

export default Ember.Route.extend({
  model () {
     return this.get('store').findAll('collection');
  },
  actions: {
    deleteCollection(collection) {
      console.log('Hit collections route', collection);
      collection.destroyRecord();
    },
  },
});
