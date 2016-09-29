import Ember from 'ember';

export default Ember.Component.extend({
  newCollection: {
    name: null,
    description: null,
  },

  actions: {
    createCollection () {
      let data = this.get('newCollection');

      if (this.get('data.name') !== null &&
          this.get('data.description') !== null){
          data.collection = this.get('collection');
      this.sendAction('createCollection', data);
      }

      // reset form fields
      this.set('newLink.name', null);
      this.set('newLink.description', null);

    },
  },
});
