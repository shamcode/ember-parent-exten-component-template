import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('contextual-comonent/parent-component', 'Integration | Component | contextual comonent/parent component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{contextual-comonent/parent-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#contextual-comonent/parent-component}}
      template block text
    {{/contextual-comonent/parent-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
