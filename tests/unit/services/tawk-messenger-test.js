import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | tawk-messenger', function (hooks) {
	setupTest(hooks);

	test('Should throw an error', function (assert) {
		window.Tawk_API = {};
		let service = this.owner.lookup('service:tawk-messenger');
		assert.ok(service);
	});
});
