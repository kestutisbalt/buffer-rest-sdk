/**
 * Represents Buffer API error.
 */
class BufferError extends Error {

	/**
	 * Constructs Buffer API error.
	 * @param {number} code Error code
	 * @param {string} message Error description
	 */
	constructor(code, message) {
		super(message);

		this.code = code;
		this.message = message;
	}
}

module.exports = BufferError;
