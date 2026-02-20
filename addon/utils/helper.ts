/**
 * Validates that a value is a non-empty string.
 *
 * @param value - A data that needs to be validated
 * @returns Type guard confirming value is a string
 */
function isValidString(value: unknown): value is string {
	if (!value || (typeof value === 'string' && value.length === 0)) {
		return false;
	}

	return value !== null && value !== undefined && typeof value === 'string';
}

export {
	isValidString
};
