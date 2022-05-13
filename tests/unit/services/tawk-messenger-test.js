import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Unit | Service | tawk-messenger', function (hooks) {
	setupRenderingTest(hooks);

	test('Should have global variables \'Tawk_API, Tawk_LoadStart\'', async function (assert) {
		await render(hbs `<TawkMessenger />`);

		const isTawkAPIObject = typeof window.Tawk_API === 'object';
		const isTawkLoadStartDate = window.Tawk_LoadStart instanceof Date;

		assert.ok(isTawkAPIObject, 'Tawk_API is not a object');
		assert.ok(isTawkLoadStartDate, 'Tawk_LoadStart is not date');
	});
});
