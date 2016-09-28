import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  user: DS.attr(),
  description: DS.attr('string'),
  links: DS.attr()
});
