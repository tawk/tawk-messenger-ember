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
	tawkStart() {
		return window.Tawk_API.start();
	}

	tawkShutdown() {
		return window.Tawk_API.shutdown();
	}

	tawkMaximize() {
		return window.Tawk_API.maximize();
	}

	tawkMinimize() {
		return window.Tawk_API.minimize();
	}

	tawkToggle() {
		return window.Tawk_API.toggle();
	}

	tawkPopup() {
		return window.Tawk_API.popup();
	}

	tawkShowWidget() {
		return window.Tawk_API.showWidget();
	}

	tawkHideWidget() {
		return window.Tawk_API.hideWidget();
	}

	tawkToggleVisibility() {
		return window.Tawk_API.toggleVisibility();
	}

	tawkEndChat() {
		return window.Tawk_API.endChat();
	}

	/**
	 * API for returning a data
	 */
	tawkGetWindowType() {
		return window.Tawk_API.getWindowType();
	}

	tawkGetStatus() {
		return window.Tawk_API.getStatus();
	}

	tawkIsChatMaximized() {
		return window.Tawk_API.isChatMaximized();
	}

	tawkIsChatMinimized() {
		return window.Tawk_API.isChatMinimized();
	}

	tawkIsChatHidden() {
		return window.Tawk_API.isChatHidden();
	}

	tawkIsChatOngoing() {
		return window.Tawk_API.isChatOngoing();
	}

	tawkIsVisitorEngaged() {
		return window.Tawk_API.isVisitorEngaged();
	}

	tawkOnLoaded() {
		return window.Tawk_API.onLoaded;
	}

	tawkOnBeforeLoaded() {
		return window.Tawk_API.onBeforeLoaded;
	}

	tawkWidgetPosition() {
		return window.Tawk_API.widgetPosition();
	}

	/**
	 * API for setting a data on the widget
	 */
	tawkVisitor(data) {
		window.Tawk_API.visitor = data;
	}

	tawkSetAttributes(attribute, callback) {
		window.Tawk_API.setAttributes(attribute, callback);
	}

	tawkAddEvent(event, metadata, callback) {
		window.Tawk_API.addEvent(event, metadata, callback);
	}

	tawkAddTags(tags, callback) {
		window.Tawk_API.addTags(tags, callback);
	}

	tawkRemoveTags(tags, callback) {
		window.Tawk_API.removeTags(tags, callback);
	}

	switchWidget(data, callback) {
		window.Tawk_API.switchWidget(data, callback);
	}
}
