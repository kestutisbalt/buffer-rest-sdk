/**
 * Represents Buffer API error.
 */
class BufferError extends Error {

	/**
	 * Constructs Buffer API error.
	 * @param {number} httpStatusCode HTTP status code
	 * @param {number} code Error code
	 * @param {string} message Error description
	 */
	constructor(httpStatusCode, code, message) {
		super(message);

		this.httpStatusCode = httpStatusCode;
		this.code = code;
		this.message = message;
	}
}

module.exports = BufferError;
