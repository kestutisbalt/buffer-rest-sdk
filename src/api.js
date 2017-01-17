let Request = require('request');
let BufferError = require('./error.js');


/**
 * Abstracts communication with Buffer REST api over HTTP.
 *
 * Responsible for setting authorization header and handling
 * resonses for HTTP requests.
 */
class Api {

	/**
	 * A promise which resolves to Buffer entity on success.
	 * On Buffer API error rejects with {@link BufferError}.
	 * Otherwise rejects with {@link Error}.
	 * @memberof Api
	 * @typedef {Promise} Response
	 */

	/**
	 * Constructs Api instance with authorization token.
	 * @param {string} token Authorization token
	 */
	constructor(token) {
		this.token = token? token : '';
	}

	/**
	 * Returns base url for Buffer REST api.
	 * @return {string} URL
	 */
	static baseUrl() {
		return 'https://api.bufferapp.com/1';
	}

	/**
	 * Makes HTTP GET request.
	 * @param {string} route Route for Buffer API. E.g '/user.json'
	 * @param {Object} query HTTP query parameters
	 * @return {Api.Response}
	 */
	get(route, query) {
		let options = {
			url: `${Api.baseUrl()}${route}`,
			json: true,
			qs: query
		};

		return new Promise((resolve, reject) => {
			let handler = responseHandler(resolve, reject);
			Request.get(options, handler)
				.auth(null, null, true, this.token);
		});
	}

	/**
	 * Makes HTTP POST request.
	 * @param {string} route Route for Buffer API. E.g '/oauth2/token.json'
	 * @param {Object} formData
	 * @return {Api.Response}
	 */
	post(route, formData) {
		let options = {
			url: `${Api.baseUrl()}${route}`,
			json: true
		};

		return new Promise((resolve, reject) => {
			let handler = responseHandler(resolve, reject);
			Request.post(options, handler)
				.form(formData? formData : {})
				.auth(null, null, true, this.token);
		});
	}
}


function responseHandler(resolve, reject) {
	return (error, res, body) => {
		if (error) {
			reject(error);
		} else if (isResponseCodeSuccess(res.statusCode)) {
			resolve(body);
		} else {
			reject(new BufferError(res.statusCode,
				body.code, body.error));
		}
	};
}


function isResponseCodeSuccess(code) {
	return code >= 200 && code < 400;
}


module.exports = Api;
