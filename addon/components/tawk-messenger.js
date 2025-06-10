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
			autoStart : this.args.autoStart
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
			if (this.args.tawkOnLoad) {
				this.args.tawkOnLoad();
			}
		});

		window.addEventListener('tawkStatusChange', (status) => {
			if (this.args.tawkOnStatusChange) {
				this.args.tawkOnStatusChange(status.detail);
			}
		});

		window.addEventListener('tawkBeforeLoad', () => {
			if (this.args.tawkOnBeforeLoad) {
				this.args.tawkOnBeforeLoad();
			}
		});

		window.addEventListener('tawkChatMaximized', () => {
			if (this.args.tawkOnChatMaximized) {
				this.args.tawkOnChatMaximized();
			}
		});

		window.addEventListener('tawkChatMinimized', () => {
			if (this.args.tawkOnChatMinimized) {
				this.args.tawkOnChatMinimized();
			}
		});

		window.addEventListener('tawkChatHidden', () => {
			if (this.args.tawkOnChatHidden) {
				this.args.tawkOnChatHidden();
			}
		});

		window.addEventListener('tawkChatStarted', () => {
			if (this.args.tawkOnChatStarted) {
				this.args.tawkOnChatStarted();
			}
		});

		window.addEventListener('tawkChatEnded', () => {
			if (this.args.tawkOnChatEnded) {
				this.args.tawkOnChatEnded();
			}
		});

		window.addEventListener('tawkPrechatSubmit', (data) => {
			if (this.args.tawkOnPrechatSubmit) {
				this.args.tawkOnPrechatSubmit(data.detail);
			}
		});

		window.addEventListener('tawkOfflineSubmit', (data) => {
			if (this.args.tawkOnOfflineSubmit) {
				this.args.tawkOnOfflineSubmit(data.detail);
			}
		});

		window.addEventListener('tawkChatMessageVisitor', (message) => {
			if (this.args.tawkOnChatMessageVisitor) {
				this.args.tawkOnChatMessageVisitor(message.detail);
			}
		});

		window.addEventListener('tawkChatMessageAgent', (message) => {
			if (this.args.tawkOnChatMessageAgent) {
				this.args.tawkOnChatMessageAgent(message.detail);
			}
		});

		window.addEventListener('tawkChatMessageSystem', (message) => {
			if (this.args.tawkOnChatMessageSystem) {
				this.args.tawkOnChatMessageSystem(message.detail);
			}
		});

		window.addEventListener('tawkAgentJoinChat', (data) => {
			if (this.args.tawkOnAgentJoinChat) {
				this.args.tawkOnAgentJoinChat(data.detail);
			}
		});

		window.addEventListener('tawkAgentLeaveChat', (data) => {
			if (this.args.tawkOnAgentLeaveChat) {
				this.args.tawkOnAgentLeaveChat(data.detail);
			}
		});

		window.addEventListener('tawkChatSatisfaction', (satisfaction) => {
			if (this.args.tawkOnChatSatisfaction) {
				this.args.tawkOnChatSatisfaction(satisfaction.detail);
			}
		});

		window.addEventListener('tawkVisitorNameChanged', (visitorName) => {
			if (this.args.tawkOnVisitorNameChanged) {
				this.args.tawkOnVisitorNameChanged(visitorName.detail);
			}
		});

		window.addEventListener('tawkFileUpload', (link) => {
			if (this.args.tawkOnFileUpload) {
				this.args.tawkOnFileUpload(link.detail);
			}
		});

		window.addEventListener('tawkTagsUpdated', (data) => {
			if (this.args.tawkOnTagsUpdated) {
				this.args.tawkOnTagsUpdated(data.detail);
			}
		});

		window.addEventListener('tawkUnreadCountChanged', (data) => {
			if (this.args.tawkOnUnreadCountChanged) {
				this.args.tawkOnUnreadCountChanged(data.detail);
			}
		});
	}
}
