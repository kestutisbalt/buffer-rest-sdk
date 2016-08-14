/**
 * Represents Buffer API error.
 */
class BufferError extends Error {
	constructor(code, message) {
		super(message);

		this.code = code;
		this.message = message;
	}
}

module.exports = BufferError;
