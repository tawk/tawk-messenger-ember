import Service from '@ember/service';

import type {
	TawkStatus,
	TawkWindowType,
	TawkVisitor,
	TawkCallback,
	TawkSwitchWidgetData,
} from '../../types/tawk-api';

export default class TawkMessengerService extends Service {
	/**
	 * API for calling an action on the widget
	 */
	tawkStart(): void {
		return window.Tawk_API.start();
	}

	tawkShutdown(): void {
		return window.Tawk_API.shutdown();
	}

	tawkMaximize(): void {
		return window.Tawk_API.maximize();
	}

	tawkMinimize(): void {
		return window.Tawk_API.minimize();
	}

	tawkToggle(): void {
		return window.Tawk_API.toggle();
	}

	tawkPopup(): void {
		return window.Tawk_API.popup();
	}

	tawkShowWidget(): void {
		return window.Tawk_API.showWidget();
	}

	tawkHideWidget(): void {
		return window.Tawk_API.hideWidget();
	}

	tawkToggleVisibility(): void {
		return window.Tawk_API.toggleVisibility();
	}

	tawkEndChat(): void {
		return window.Tawk_API.endChat();
	}

	/**
	 * API for returning a data
	 */
	tawkGetWindowType(): TawkWindowType {
		return window.Tawk_API.getWindowType();
	}

	tawkGetStatus(): TawkStatus {
		return window.Tawk_API.getStatus();
	}

	tawkIsChatMaximized(): boolean {
		return window.Tawk_API.isChatMaximized();
	}

	tawkIsChatMinimized(): boolean {
		return window.Tawk_API.isChatMinimized();
	}

	tawkIsChatHidden(): boolean {
		return window.Tawk_API.isChatHidden();
	}

	tawkIsChatOngoing(): boolean {
		return window.Tawk_API.isChatOngoing();
	}

	tawkIsVisitorEngaged(): boolean {
		return window.Tawk_API.isVisitorEngaged();
	}

	tawkOnLoaded(): boolean | undefined {
		return window.Tawk_API.onLoaded;
	}

	tawkOnBeforeLoaded(): boolean | undefined {
		return window.Tawk_API.onBeforeLoaded;
	}

	tawkWidgetPosition(): string {
		return window.Tawk_API.widgetPosition();
	}

	/**
	 * API for setting a data on the widget
	 */
	tawkVisitor(data: TawkVisitor): void {
		window.Tawk_API.visitor = data;
	}

	tawkSetAttributes(attribute: Record<string, string>, callback?: TawkCallback): void {
		window.Tawk_API.setAttributes(attribute, callback);
	}

	tawkAddEvent(event: string, metadata?: Record<string, string>, callback?: TawkCallback): void {
		window.Tawk_API.addEvent(event, metadata, callback);
	}

	tawkAddTags(tags: string[], callback?: TawkCallback): void {
		window.Tawk_API.addTags(tags, callback);
	}

	tawkRemoveTags(tags: string[], callback?: TawkCallback): void {
		window.Tawk_API.removeTags(tags, callback);
	}

	switchWidget(data: TawkSwitchWidgetData, callback?: TawkCallback): void {
		window.Tawk_API.switchWidget(data, callback);
	}
}
