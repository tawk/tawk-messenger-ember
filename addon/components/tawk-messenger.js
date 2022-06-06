import Component from '@glimmer/component';

// Utilities
import { isValidString } from '../utils/helper';
import { loadScript } from '../utils/widget';

export default class TawkMessengerComponent extends Component {
	constructor(...args) {
		super(...args);

		if (!isValidString(this.args.propertyId)) {
			console.error('[Tawk-messenger-ember warn]: You didn\'t specified \'propertyId\'');
			return;
		}

		if (!isValidString(this.args.widgetId)) {
			console.error('[Tawk-messenger-ember warn]: You didn\'t specified \'widgetId\'');
			return;
		}

		this.load();
	}

	load() {
		if (!window || !document) {
			return;
		}

		/**
		 * Set placeholder
		 */
		window.Tawk_API = window.Tawk_API || {};
		window.Tawk_LoadStart = new Date();

		/**
		 * Set custom style
		 */
		if (this.args.customStyle && typeof this.args.customStyle === 'object') {
			window.Tawk_API.customStyle = this.args.customStyle;
		}

		/**
		 * Inject the Tawk script
		 */
		loadScript({
			propertyId : this.args.propertyId,
			widgetId : this.args.widgetId,
			embedId : this.args.embedId,
			basePath : this.args.basePath,
		});

		/**
		 * Inject the event listeners
		*/
		this.mapListeners();
	}

	/**
	 * API for listening an event emitting
	 * inside of the widget
	 */
	mapListeners() {
		window.addEventListener('tawkLoad', () => {
			if (this.args.onLoad) {
				this.args.onLoad();
			}
		});

		window.addEventListener('tawkStatusChange', (status) => {
			if (this.args.onStatusChange) {
				this.args.onStatusChange(status.detail);
			}
		});

		window.addEventListener('tawkBeforeLoad', () => {
			if (this.args.onBeforeLoad) {
				this.args.onBeforeLoad();
			}
		});

		window.addEventListener('tawkChatMaximized', () => {
			if (this.args.onChatMaximized) {
				this.args.onChatMaximized();
			}
		});

		window.addEventListener('tawkChatMinimized', () => {
			if (this.args.onChatMinimized) {
				this.args.onChatMinimized();
			}
		});

		window.addEventListener('tawkChatHidden', () => {
			if (this.args.onChatHidden) {
				this.args.onChatHidden();
			}
		});

		window.addEventListener('tawkChatStarted', () => {
			if (this.args.onChatStarted) {
				this.args.onChatStarted();
			}
		});

		window.addEventListener('tawkChatEnded', () => {
			if (this.args.onChatEnded) {
				this.args.onChatEnded();
			}
		});

		window.addEventListener('tawkPrechatSubmit', (data) => {
			if (this.args.onPrechatSubmit) {
				this.args.onPrechatSubmit(data.detail);
			}
		});

		window.addEventListener('tawkOfflineSubmit', (data) => {
			if (this.args.onOfflineSubmit) {
				this.args.onOfflineSubmit(data.detail);
			}
		});

		window.addEventListener('tawkChatMessageVisitor', (message) => {
			if (this.args.onChatMessageVisitor) {
				this.args.onChatMessageVisitor(message.detail);
			}
		});

		window.addEventListener('tawkChatMessageAgent', (message) => {
			if (this.args.onChatMessageAgent) {
				this.args.onChatMessageAgent(message.detail);
			}
		});

		window.addEventListener('tawkChatMessageSystem', (message) => {
			if (this.args.onChatMessageSystem) {
				this.args.onChatMessageSystem(message.detail);
			}
		});

		window.addEventListener('tawkAgentJoinChat', (data) => {
			if (this.args.onAgentJoinChat) {
				this.args.onAgentJoinChat(data.detail);
			}
		});

		window.addEventListener('tawkAgentLeaveChat', (data) => {
			if (this.args.onAgentLeaveChat) {
				this.args.onAgentLeaveChat(data.detail);
			}
		});

		window.addEventListener('tawkChatSatisfaction', (satisfaction) => {
			if (this.args.onChatSatisfaction) {
				this.args.onChatSatisfaction(satisfaction.detail);
			}
		});

		window.addEventListener('tawkVisitorNameChanged', (visitorName) => {
			if (this.args.onVisitorNameChanged) {
				this.args.onVisitorNameChanged(visitorName.detail);
			}
		});

		window.addEventListener('tawkFileUpload', (link) => {
			if (this.args.onFileUpload) {
				this.args.onFileUpload(link.detail);
			}
		});

		window.addEventListener('tawkTagsUpdated', (data) => {
			if (this.args.onTagsUpdated) {
				this.args.onTagsUpdated(data.detail);
			}
		});

		window.addEventListener('tawkUnreadCountChanged', (data) => {
			if (this.args.onUnreadCountChanged) {
				this.args.onUnreadCountChanged(data.detail);
			}
		});
	}
}
