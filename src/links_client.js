let Api = require('./api.js');


/**
 * Buffer API wrapper for links related actions.
 */
class LinksClient {

	/**
	 * @param {Api} api
	 */
	constructor(api) {
		if (!(api instanceof Api)) {
			throw new Error('api is not instance of Api');
		}
		this.api = api;
	}

	/**
	 * Requests for an object with a the numbers of shares a link
	 * has had using Buffer.
	 * @param {string} url Url
	 * @throws Will throw an error if url is null or empty string
	 * @return {Api.Response}
	 */
	getShares(url) {
		if (!url) {
			throw new Error('url can\'t be empty');
		}

		return this.api.get('/links/shares.json', {
			url: url
		});
	}
}


module.exports = LinksClient;
