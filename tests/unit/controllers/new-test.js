import { module, test } from 'qunit';
import { setupTest } from 'ember-solid-with-ess-test/tests/helpers';

module('Unit | Controller | new', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:new');
    assert.ok(controller);
  });
});
