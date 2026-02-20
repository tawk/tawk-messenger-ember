/**
 * Tawk.to JavaScript API type definitions.
 * @see https://developer.tawk.to/jsapi/
 */

export type TawkStatus = 'online' | 'away' | 'offline';
export type TawkWindowType = 'inline' | 'embed';

export interface TawkVisitor {
	name?: string;
	email?: string;
	hash?: string;
}

export interface TawkCustomStyle {
	zIndex?: number | string;
	visibility?: {
		desktop?: {
			xOffset?: string | number;
			yOffset?: string | number;
			position?: 'bl' | 'br' | 'cr' | 'cl' | 'tl' | 'tr';
		};
		mobile?: {
			xOffset?: number;
			yOffset?: number;
			position?: 'bl' | 'br' | 'cr' | 'cl' | 'tl' | 'tr';
		};
		bubble?: {
			show?: boolean;
		};
	};
}

export interface TawkSetAttributesError {
	errorCode: number;
	errorMessage: string;
}

export type TawkCallback = (error?: TawkSetAttributesError) => void;

export interface TawkSwitchWidgetData {
	propertyId: string;
	widgetId: string;
}

export interface TawkAPI {
	// Configuration
	autoStart?: boolean;
	embedded?: string;
	customStyle?: TawkCustomStyle;
	visitor?: TawkVisitor;
	onLoaded?: boolean;
	onBeforeLoaded?: boolean;

	// Action methods
	start(options?: { showWidget?: boolean }): void;
	shutdown(): void;
	maximize(): void;
	minimize(): void;
	toggle(): void;
	popup(): void;
	showWidget(): void;
	hideWidget(): void;
	toggleVisibility(): void;
	endChat(): void;

	// Getter methods
	getWindowType(): TawkWindowType;
	getStatus(): TawkStatus;
	isChatMaximized(): boolean;
	isChatMinimized(): boolean;
	isChatHidden(): boolean;
	isChatOngoing(): boolean;
	isVisitorEngaged(): boolean;
	widgetPosition(): string;

	// Setter methods
	setAttributes(attributes: Record<string, string>, callback?: TawkCallback): void;
	addEvent(event: string, metadata?: Record<string, string>, callback?: TawkCallback): void;
	addTags(tags: string[], callback?: TawkCallback): void;
	removeTags(tags: string[], callback?: TawkCallback): void;
	switchWidget(data: TawkSwitchWidgetData, callback?: TawkCallback): void;

	// Event callbacks (set by the Tawk widget script)
	onLoad?(): void;
	onStatusChange?(status: TawkStatus): void;
	onBeforeLoad?(): void;
	onChatMaximized?(): void;
	onChatMinimized?(): void;
	onChatHidden?(): void;
	onChatStarted?(): void;
	onChatEnded?(): void;
	onPrechatSubmit?(data: Record<string, string>): void;
	onOfflineSubmit?(data: Record<string, string>): void;
	onChatMessageVisitor?(message: string): void;
	onChatMessageAgent?(message: string): void;
	onChatMessageSystem?(message: string): void;
	onAgentJoinChat?(data: Record<string, unknown>): void;
	onAgentLeaveChat?(data: Record<string, unknown>): void;
	onChatSatisfaction?(satisfaction: string): void;
	onVisitorNameChanged?(visitorName: string): void;
	onFileUpload?(link: string): void;
	onTagsUpdated?(data: unknown): void;
	onUnreadCountChanged?(count: number): void;
}
