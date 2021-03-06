import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('collection', params.collection_id);
  },

  actions: {
    saveCollection (collection){
      collection.save()
        .then(()=>this.transitionTo('collections'));
    },
  },
});
