import Ember from 'ember';

export default Ember.Component.extend({

  // editCollection: {
  //   name: null,
  //   description: null,
  // },

  actions: {
    save () {
      console.log('hurray');
      // let data = this.get('editCollection');

      this.sendAction('save', this.get('editCollection'));

      // // reset form fields
      // this.set('editCollection.name', null);
      // this.set('editCollection.description', null);


    },
  },
});
