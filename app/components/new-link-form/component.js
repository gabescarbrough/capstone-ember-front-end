import Ember from 'ember';

export default Ember.Component.extend({
  newLink: {
    name: null,
    url: null,
    description: null,
  },

  actions: {
    createLink () {
      let data = this.get('newLink');

      if (this.get('data.name') !== null &&
          this.get('data.url') !== null &&
          this.get('data.description') !== null){
          data.collection = this.get('collection');
      this.sendAction('createLink', data);
      }

      // reset form fields
      this.set('newLink.name', null);
      this.set('newLink.url', null);
      this.set('newLink.description', null);


    },
  },
});
