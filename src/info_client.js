let Api = require('./api.js');


/**
 * Buffer API wrapper for info related actions.
 */
class InfoClient {

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
	 * Requests for current configuration that Buffer is using,
	 * including supported services, their icons and the varying limits
	 * of character and schedules.
	 * @return {Api.Response}
	 */
	getConfiguration() {
		return this.api.get('/info/configuration.json');
	}
}


module.exports = InfoClient;
