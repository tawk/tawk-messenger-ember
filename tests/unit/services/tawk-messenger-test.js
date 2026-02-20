import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | tawk-messenger', function (hooks) {
	setupTest(hooks);

	test('Should set the Action services', async function (assert) {
		const service = this.owner.lookup('service:tawk-messenger');

		assert.strictEqual(
			typeof service.tawkMaximize,
			'function',
			'Maximize is not a function',
		);
		assert.strictEqual(
			typeof service.tawkMinimize,
			'function',
			'Minimize is not a function',
		);
		assert.strictEqual(
			typeof service.tawkToggle,
			'function',
			'Toggle is not a function',
		);
		assert.strictEqual(
			typeof service.tawkPopup,
			'function',
			'Popup is not a function',
		);
		assert.strictEqual(
			typeof service.tawkShowWidget,
			'function',
			'ShowWidget is not a function',
		);
		assert.strictEqual(
			typeof service.tawkHideWidget,
			'function',
			'HideWidget is not a function',
		);
		assert.strictEqual(
			typeof service.tawkToggleVisibility,
			'function',
			'ToggleVisibility is not a function',
		);
		assert.strictEqual(
			typeof service.tawkEndChat,
			'function',
			'EndChat is not a function',
		);
	});

	test('Should set the Getters services', async function (assert) {
		const service = this.owner.lookup('service:tawk-messenger');

		assert.strictEqual(
			typeof service.tawkGetWindowType,
			'function',
			'GetWindowType is not a function',
		);
		assert.strictEqual(
			typeof service.tawkGetStatus,
			'function',
			'GetStatus is not a function',
		);
		assert.strictEqual(
			typeof service.tawkIsChatMaximized,
			'function',
			'IsChatMaximized is not a function',
		);
		assert.strictEqual(
			typeof service.tawkIsChatMinimized,
			'function',
			'IsChatMinimized is not a function',
		);
		assert.strictEqual(
			typeof service.tawkIsChatHidden,
			'function',
			'IsChatHidden is not a function',
		);
		assert.strictEqual(
			typeof service.tawkIsChatOngoing,
			'function',
			'IsChatOngoing is not a function',
		);
		assert.strictEqual(
			typeof service.tawkIsVisitorEngaged,
			'function',
			'IsVisitorEngaged is not a function',
		);
		assert.strictEqual(
			typeof service.tawkOnLoaded,
			'function',
			'OnLoaded is not a function',
		);
		assert.strictEqual(
			typeof service.tawkOnBeforeLoaded,
			'function',
			'OnBeforeLoaded is not a function',
		);
		assert.strictEqual(
			typeof service.tawkWidgetPosition,
			'function',
			'WidgetPosition is not a function',
		);
	});

	test('Should set the Setters services', async function (assert) {
		const service = this.owner.lookup('service:tawk-messenger');

		assert.strictEqual(
			typeof service.tawkVisitor,
			'function',
			'Visitor is not a function',
		);
		assert.strictEqual(
			typeof service.tawkSetAttributes,
			'function',
			'SetAttributes is not a function',
		);
		assert.strictEqual(
			typeof service.tawkAddEvent,
			'function',
			'AddEvent is not a function',
		);
		assert.strictEqual(
			typeof service.tawkAddTags,
			'function',
			'AddTags is not a function',
		);
		assert.strictEqual(
			typeof service.tawkRemoveTags,
			'function',
			'RemoveTags is not a function',
		);
	});
});
