import type { TawkAPI } from './tawk-api';

declare global {
	interface Window {
		Tawk_API: TawkAPI;
		Tawk_LoadStart: Date;
	}
}

export {};
