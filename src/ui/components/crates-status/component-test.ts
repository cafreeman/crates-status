import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: crates-status', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<crates-status />`);
    assert.equal(this.containerElement.textContent, 'Welcome to Glimmer!\n');
  });
});
