/**
 * Represents Buffer API error.
 */
class BufferError extends Error {

	/**
	 * Constructs Buffer API error.
	 * @param {number} httpStatusCode HTTP status code
	 * @param {number} code Error code
	 * @param {string} error Error description
	 */
	constructor(httpStatusCode, code, error) {
		super();
		this.name = 'BufferError';
		this.httpStatusCode = httpStatusCode;
		this.code = code;
		this.error = error;
	}

	/**
	 * Checks if unauthorized error.
	 * @return {boolean}
	 */
	isUnauthorized() {
		return (this.code === 401
			&& this.httpStatusCode === 401);
	}

	/**
	 * Checks if permission denied error.
	 * @return {boolean}
	 */
	isPermissionDenied() {
		return (this.code === 403
			&& this.httpStatusCode === 403);
	}

	/**
	 * Checks if endpoint not found error.
	 * @return {boolean}
	 */
	isEndpointNotFound() {
		return (this.code === 404
			&& this.httpStatusCode === 404);
	}

	/**
	 * Checks if method not allowed error.
	 * @return {boolean}
	 */
	isMethodNotAllowed() {
		return (this.code === 405
			&& this.httpStatusCode === 405);
	}

	/**
	 * Checks if too many requests error.
	 * @return {boolean}
	 */
	isTooManyRequests() {
		return (this.code === 429
			&& this.httpStatusCode === 429);
	}

	/**
	 * Checks if unknown error.
	 * @return {boolean}
	 */
	isUnknown() {
		return (this.code === 1000
			&& this.httpStatusCode === 500);
	}

	/**
	 * Checks if reached update limit for profile error.
	 * @return {boolean}
	 */
	isReachedUpdateLimitForProfile() {
		return (this.code === 1023
			&& this.httpStatusCode === 403);
	}

	/**
	 * Checks if duplicate content error.
	 * @return {boolean}
	 */
	isDuplicateContent() {
		return (this.code === 1025
			&& this.httpStatusCode === 400);
	}
}

module.exports = BufferError;
