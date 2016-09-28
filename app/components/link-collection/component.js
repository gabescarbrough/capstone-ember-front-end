import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteLink (link) {
      this.sendAction('deleteLink', link);
    },
  },
});
