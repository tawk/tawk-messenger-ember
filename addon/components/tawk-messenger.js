import Component from '@glimmer/component';

export default class TawkMessengerComponent extends Component {
	constructor(...args) {
		super(...args);

		this.mapListeners();
	}

	mapListeners() {
		window.addEventListener('tawkLoad', () => {
			if (this.args.onLoad) {
				this.args.onLoad();
			}
		});

		window.addEventListener('tawkStatusChange', (status) => {
			if (this.args.statusChange) {
				this.args.onstatusChange(status.detail);
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
