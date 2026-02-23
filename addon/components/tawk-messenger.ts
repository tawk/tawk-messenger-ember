import Component from '@glimmer/component';

// Utilities
import { isValidString } from '../utils/helper';
import { loadScript } from '../utils/widget';

import type { TawkCustomStyle } from '../../types/tawk-api';

export interface TawkMessengerSignature {
	Args: {
		propertyId: string;
		widgetId: string;
		embedId?: string;
		basePath?: string;
		autoStart?: boolean;
		customStyle?: TawkCustomStyle;
		tawkOnLoad?: () => void;
		tawkOnStatusChange?: (status: unknown) => void;
		tawkOnBeforeLoad?: () => void;
		tawkOnChatMaximized?: () => void;
		tawkOnChatMinimized?: () => void;
		tawkOnChatHidden?: () => void;
		tawkOnChatStarted?: () => void;
		tawkOnChatEnded?: () => void;
		tawkOnPrechatSubmit?: (data: unknown) => void;
		tawkOnOfflineSubmit?: (data: unknown) => void;
		tawkOnChatMessageVisitor?: (message: string) => void;
		tawkOnChatMessageAgent?: (message: string) => void;
		tawkOnChatMessageSystem?: (message: string) => void;
		tawkOnAgentJoinChat?: (data: unknown) => void;
		tawkOnAgentLeaveChat?: (data: unknown) => void;
		tawkOnChatSatisfaction?: (satisfaction: string) => void;
		tawkOnVisitorNameChanged?: (visitorName: string) => void;
		tawkOnFileUpload?: (link: string) => void;
		tawkOnTagsUpdated?: (data: unknown) => void;
		tawkOnUnreadCountChanged?: (data: unknown) => void;
	};
	Blocks: Record<string, never>;
	Element: null;
}

export default class TawkMessengerComponent extends Component<TawkMessengerSignature> {
	constructor(owner: unknown, args: TawkMessengerSignature['Args']) {
		super(owner, args);

		if (!isValidString(this.args.propertyId)) {
			console.error(
				'[Tawk-messenger-ember warn]: You didn\'t specified \'propertyId\'',
			);
			return;
		}

		if (!isValidString(this.args.widgetId)) {
			console.error(
				'[Tawk-messenger-ember warn]: You didn\'t specified \'widgetId\'',
			);
			return;
		}

		this.load();
	}

	load(): void {
		if (!window || !document) {
			return;
		}

		/**
		 * Set placeholder
		 */
		window.Tawk_API = window.Tawk_API || ({} as typeof window.Tawk_API);
		window.Tawk_LoadStart = new Date();

		/**
		 * Set custom style
		 */
		if (
			this.args.customStyle &&
			typeof this.args.customStyle === 'object'
		) {
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
			autoStart : this.args.autoStart,
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
	mapListeners(): void {
		window.addEventListener('tawkLoad', () => {
			if (this.args.tawkOnLoad) {
				this.args.tawkOnLoad();
			}
		});

		window.addEventListener('tawkStatusChange', ((status: CustomEvent) => {
			if (this.args.tawkOnStatusChange) {
				this.args.tawkOnStatusChange(status.detail);
			}
		}) as EventListener);

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

		window.addEventListener('tawkPrechatSubmit', ((data: CustomEvent) => {
			if (this.args.tawkOnPrechatSubmit) {
				this.args.tawkOnPrechatSubmit(data.detail);
			}
		}) as EventListener);

		window.addEventListener('tawkOfflineSubmit', ((data: CustomEvent) => {
			if (this.args.tawkOnOfflineSubmit) {
				this.args.tawkOnOfflineSubmit(data.detail);
			}
		}) as EventListener);

		window.addEventListener('tawkChatMessageVisitor', ((
			message: CustomEvent,
		) => {
			if (this.args.tawkOnChatMessageVisitor) {
				this.args.tawkOnChatMessageVisitor(message.detail);
			}
		}) as EventListener);

		window.addEventListener('tawkChatMessageAgent', ((
			message: CustomEvent,
		) => {
			if (this.args.tawkOnChatMessageAgent) {
				this.args.tawkOnChatMessageAgent(message.detail);
			}
		}) as EventListener);

		window.addEventListener('tawkChatMessageSystem', ((
			message: CustomEvent,
		) => {
			if (this.args.tawkOnChatMessageSystem) {
				this.args.tawkOnChatMessageSystem(message.detail);
			}
		}) as EventListener);

		window.addEventListener('tawkAgentJoinChat', ((data: CustomEvent) => {
			if (this.args.tawkOnAgentJoinChat) {
				this.args.tawkOnAgentJoinChat(data.detail);
			}
		}) as EventListener);

		window.addEventListener('tawkAgentLeaveChat', ((data: CustomEvent) => {
			if (this.args.tawkOnAgentLeaveChat) {
				this.args.tawkOnAgentLeaveChat(data.detail);
			}
		}) as EventListener);

		window.addEventListener('tawkChatSatisfaction', ((
			satisfaction: CustomEvent,
		) => {
			if (this.args.tawkOnChatSatisfaction) {
				this.args.tawkOnChatSatisfaction(satisfaction.detail);
			}
		}) as EventListener);

		window.addEventListener('tawkVisitorNameChanged', ((
			visitorName: CustomEvent,
		) => {
			if (this.args.tawkOnVisitorNameChanged) {
				this.args.tawkOnVisitorNameChanged(visitorName.detail);
			}
		}) as EventListener);

		window.addEventListener('tawkFileUpload', ((link: CustomEvent) => {
			if (this.args.tawkOnFileUpload) {
				this.args.tawkOnFileUpload(link.detail);
			}
		}) as EventListener);

		window.addEventListener('tawkTagsUpdated', ((data: CustomEvent) => {
			if (this.args.tawkOnTagsUpdated) {
				this.args.tawkOnTagsUpdated(data.detail);
			}
		}) as EventListener);

		window.addEventListener('tawkUnreadCountChanged', ((
			data: CustomEvent,
		) => {
			if (this.args.tawkOnUnreadCountChanged) {
				this.args.tawkOnUnreadCountChanged(data.detail);
			}
		}) as EventListener);
	}
}
