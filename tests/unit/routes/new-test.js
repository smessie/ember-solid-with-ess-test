import { module, test } from 'qunit';
import { setupTest } from 'ember-solid-with-ess-test/tests/helpers';

module('Unit | Route | new', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:new');
    assert.ok(route);
  });
});
