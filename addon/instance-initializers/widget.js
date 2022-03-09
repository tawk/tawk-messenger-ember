export function initialize(appInstance) {
	const env = appInstance.resolveRegistration('config:environment');

	if (!env.tawkMessenger && typeof env.tawkMessenger !== 'object') {
		console.error('[Tawk-messenger-ember error]: \'tawkMessenger\' object is missing in config/environment');
		return;
	}

	if (!isValidString(env.tawkMessenger.propertyId)) {
		console.error('[Tawk-messenger-ember warn]: You didn\'t specified \'propertyId\'');
		return;
	}

	if (!isValidString(env.tawkMessenger.widgetId)) {
		console.error('[Tawk-messenger-ember warn]: You didn\'t specified \'widgetId\'');
		return;
	}

	if (!window || !document) {
		return;
	}

	install(env.tawkMessenger);
}

/**
 * Setup global variable and loadscript
 * @param {Object} options - An object collection of all options for API
 */
function install(options) {
	/**
	 * Set placeholder
	 */
	window.Tawk_API = window.Tawk_API || {};
	window.Tawk_LoadStart = new Date();

	/**
	  * Set custom style
	  */
	if (options.customStyle && typeof options.customStyle === 'object') {
		window.Tawk_API.customStyle = options.customStyle;
	}

	/**
	 * Inject the Tawk script
	 */
	loadScript({
		propertyId : options.propertyId,
		widgetId : options.widgetId,
		embedId : options.embedId,
		basePath : options.basePath,
	});
}

/**
 * Inject the embedd widget
 * @param {Object} - Tawk widget required properties
 */
function loadScript({ propertyId = '', widgetId = '', embedId = '', basePath = 'tawk.to'}) {
	if (embedId.length) {
		/**
		 * If the element with embedId as id we will create a new clement
		 */
		if (!document.getElementById(embedId)) {
			const element = document.createElement('div');
			element.id = embedId;

			document.body.appendChild(element);
		}

		window.Tawk_API.embedded = embedId;
	}

	const script = document.createElement('script');
	script.async = true;
	script.src = `https://embed.${basePath}/${propertyId}/${widgetId}`;
	script.charset = 'UTF-8';
	script.setAttribute('crossorigin', '*');

	const firstScript = document.getElementsByTagName('script')[0];
	firstScript.parentNode.insertBefore(script, firstScript);
}

function isValidString(value) {
	if (!value || value.length === 0) {
		return false;
	}

	return value !== null && value !== undefined && typeof value === 'string';
}

export default {
	name : 'tawk-messenger-ember',
	initialize,
};
