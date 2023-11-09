import Service from '@ember/service';

export default class TawkMessenger extends Service {
	constructor(...args) {
		super(...args);

		if (!window.Tawk_API || typeof window.Tawk_API !== 'object') {
			console.error('[Tawk-messenger-ember warn]: Please load the component first before calling the services.');
			return;
		}
	}

	/**
	 * API for calling an action on the widget
	 */
	start() {
		return window.Tawk_API.start();
	}

	shutdown() {
		return window.Tawk_API.shutdown();
	}

	maximize() {
		return window.Tawk_API.maximize();
	}

	minimize() {
		return window.Tawk_API.minimize();
	}

	toggle() {
		return window.Tawk_API.toggle();
	}

	popup() {
		return window.Tawk_API.popup();
	}

	showWidget() {
		return window.Tawk_API.showWidget();
	}

	hideWidget() {
		return window.Tawk_API.hideWidget();
	}

	toggleVisibility() {
		return window.Tawk_API.toggleVisibility();
	}

	endChat() {
		return window.Tawk_API.endChat();
	}

	/**
	 * API for returning a data
	 */
	getWindowType() {
		return window.Tawk_API.getWindowType();
	}

	getStatus() {
		return window.Tawk_API.getStatus();
	}

	isChatMaximized() {
		return window.Tawk_API.isChatMaximized();
	}

	isChatMinimized() {
		return window.Tawk_API.isChatMinimized();
	}

	isChatHidden() {
		return window.Tawk_API.isChatHidden();
	}

	isChatOngoing() {
		return window.Tawk_API.isChatOngoing();
	}

	isVisitorEngaged() {
		return window.Tawk_API.isVisitorEngaged();
	}

	onLoaded() {
		return window.Tawk_API.onLoaded;
	}

	onBeforeLoaded() {
		return window.Tawk_API.onBeforeLoaded;
	}

	widgetPosition() {
		return window.Tawk_API.widgetPosition();
	}

	/**
	 * API for setting a data on the widget
	 */
	autoStart(enable) {
		window.Tawk_API.autoStart = enable;
	}

	visitor(data) {
		window.Tawk_API.visitor = data;
	}

	setAttributes(attribute, callback) {
		window.Tawk_API.setAttributes(attribute, callback);
	}

	addEvent(event, metadata, callback) {
		window.Tawk_API.addEvent(event, metadata, callback);
	}

	addTags(tags, callback) {
		window.Tawk_API.addTags(tags, callback);
	}

	removeTags(tags, callback) {
		window.Tawk_API.removeTags(tags, callback);
	}
}
