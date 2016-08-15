let Api = require('./api.js');


/**
 * Buffer API wrapper for user related actions.
 */
class UserClient {

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
	 * Requests for user.
	 * @return {Api.Response}
	 */
	getUser() {
		return this.api.get('/user.json');
	}

	/**
	 * Requests to revoke access for authorization token.
	 * @return {Api.Response}
	 */
	deauthorize() {
		return this.api.post('/user/deauthorize.json');
	}
}


module.exports = UserClient;
