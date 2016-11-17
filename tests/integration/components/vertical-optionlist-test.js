import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('vertical-optionlist', 'Integration | Component | vertical optionlist', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{vertical-optionlist}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#vertical-optionlist}}
      template block text
    {{/vertical-optionlist}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
