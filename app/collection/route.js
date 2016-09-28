import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('collection', params.collection_id);
  },

  actions: {
    deleteLink (link) {
      link.destroyRecord();
    },
    createLink (data) {
      let link = this.get('store').createRecord('link', data);
      link.save();
    },
  },
});
