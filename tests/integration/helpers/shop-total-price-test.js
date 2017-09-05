
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('shop-total-price', 'helper:shop-total-price', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{shop-total-price inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

