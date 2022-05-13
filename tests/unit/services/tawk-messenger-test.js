import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | tawk-messenger', function (hooks) {
	setupTest(hooks);

	test('Should set the Action services', async function (assert) {
		const service = this.owner.lookup('service:tawk-messenger');

		assert.strictEqual(typeof service.maximize, 'function', 'Maximize is not a function');
		assert.strictEqual(typeof service.minimize, 'function', 'Minimize is not a function');
		assert.strictEqual(typeof service.toggle, 'function', 'Toggle is not a function');
		assert.strictEqual(typeof service.popup, 'function', 'Popup is not a function');
		assert.strictEqual(typeof service.showWidget, 'function', 'ShowWidget is not a function');
		assert.strictEqual(typeof service.hideWidget, 'function', 'HideWidget is not a function');
		assert.strictEqual(typeof service.toggleVisibility, 'function', 'ToggleVisibility is not a function');
		assert.strictEqual(typeof service.endChat, 'function', 'EndChat is not a function');
	});

	test('Should set the Getters services', async function (assert) {
		const service = this.owner.lookup('service:tawk-messenger');

		assert.strictEqual(typeof service.getWindowType, 'function', 'GetWindowType is not a function');
		assert.strictEqual(typeof service.getStatus, 'function', 'GetStatus is not a function');
		assert.strictEqual(typeof service.isChatMaximized, 'function', 'IsChatMaximized is not a function');
		assert.strictEqual(typeof service.isChatMinimized, 'function', 'IsChatMinimized is not a function');
		assert.strictEqual(typeof service.isChatHidden, 'function', 'IsChatHidden is not a function');
		assert.strictEqual(typeof service.isChatOngoing, 'function', 'IsChatOngoing is not a function');
		assert.strictEqual(typeof service.isVisitorEngaged, 'function', 'IsVisitorEngaged is not a function');
		assert.strictEqual(typeof service.onLoaded, 'function', 'OnLoaded is not a function');
		assert.strictEqual(typeof service.onBeforeLoaded, 'function', 'OnBeforeLoaded is not a function');
		assert.strictEqual(typeof service.widgetPosition, 'function', 'WidgetPosition is not a function');
	});

	test('Should set the Setters services', async function (assert) {
		const service = this.owner.lookup('service:tawk-messenger');

		assert.strictEqual(typeof service.visitor, 'function', 'Visitor is not a function');
		assert.strictEqual(typeof service.setAttributes, 'function', 'SetAttributes is not a function');
		assert.strictEqual(typeof service.addEvent, 'function', 'AddEvent is not a function');
		assert.strictEqual(typeof service.addTags, 'function', 'AddTags is not a function');
		assert.strictEqual(typeof service.removeTags, 'function', 'RemoveTags is not a function');
	});
});
