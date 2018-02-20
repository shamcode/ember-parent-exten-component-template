
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slot-hash', 'helper:slot-hash', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{slot-hash inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

