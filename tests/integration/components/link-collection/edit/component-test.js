import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('link-collection/edit', 'Integration | Component | link collection/edit', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{link-collection/edit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#link-collection/edit}}
      template block text
    {{/link-collection/edit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
