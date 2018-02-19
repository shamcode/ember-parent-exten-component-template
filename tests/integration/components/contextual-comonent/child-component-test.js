import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('contextual-comonent/child-component', 'Integration | Component | contextual comonent/child component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{contextual-comonent/child-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#contextual-comonent/child-component}}
      template block text
    {{/contextual-comonent/child-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
