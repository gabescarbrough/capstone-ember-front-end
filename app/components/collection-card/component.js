import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete () {
      console.log('I got here', this.get('collection'));
      this.sendAction('delete', this.get('collection'));
    },
  },
});
