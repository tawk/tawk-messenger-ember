import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const mockConfig = {
	propertyId : 'property_id',
	widgetId : 'widget_id'
};

module('Integration | Component | tawk-messenger', function (hooks) {
	setupRenderingTest(hooks);

	test('Should set \'Tawk_API\' global variable', async function (assert) {
		/**
		 * Set tawk-messenger configuration
		 */
		this.set('propertyId', mockConfig.propertyId);
		this.set('widgetId', mockConfig.widgetId);

		await render(hbs `
			<TawkMessenger
				@propertyId={{this.propertyId}}
				@widgetId={{this.widgetId}}/>
		`);

		assert.strictEqual(typeof window.Tawk_API, 'object', 'Tawk_API is not a object');
	});

	test('Should set \'Tawk_LoadStart\' global variable', async function (assert) {
		/**
		 * Set tawk-messenger configuration
		 */
		this.set('propertyId', mockConfig.propertyId);
		this.set('widgetId', mockConfig.widgetId);

		await render(hbs `
			<TawkMessenger
				@propertyId={{this.propertyId}}
				@widgetId={{this.widgetId}}/>
		`);

		assert.true(window.Tawk_LoadStart instanceof Date, 'Tawk_LoadStart is not date');
	});


	test('Should set \'customStyle\' property in \'Tawk_API\'', async function (assert) {
		/**
		 * Set tawk-messenger configuration
		 */
		this.set('propertyId', mockConfig.propertyId);
		this.set('widgetId', mockConfig.widgetId);

		/**
		 * Set customStyle in widget
		 */
		mockConfig.customStyle = { zIndex : 123 };
		this.set('customStyle', mockConfig.customStyle);

		await render(hbs `
			<TawkMessenger
				@propertyId={{this.propertyId}}
				@widgetId={{this.widgetId}}
				@customStyle={{this.customStyle}}/>
		`);

		assert.strictEqual(typeof window.Tawk_API.customStyle, 'object', 'Tawk_API.customStyle is not a object');
		assert.strictEqual(window.Tawk_API.customStyle.zIndex, 123, 'zIndex is\'nt set');
	});
});
