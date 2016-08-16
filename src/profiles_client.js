let Api = require('./api.js');


/**
 * Buffer API wrapper for profiles related actions.
 */
class ProfilesClient {

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
	 * Requests for all available profiles.
	 * @return {Api.Response}
	 */
	getProfiles() {
		return this.api.get('/profiles.json');
	}

	/**
	 * Requests for profile.
	 * @param {string} id Profiles id
	 * @return {Api.Response}
	 */
	getProfile(id) {
		return this.api.get(`/profiles/${id}.json`);
	}

	/**
	 * Requests schedules for profile.
	 * @param {string} id Profile id
	 * @return {Api.Response}
	 */
	getProfileSchedules(id) {
		return this.api.get(`/profiles/${id}/schedules.json`);
	}

	/**
	 * Requests schedules update for profile.
	 * @param {string} id Profile id
	 * @param {Object} schedules
	 * @return {Api.Response}
	 */
	updateProfileSchedules(id, schedules) {
		return this.api.post(`/profiles/${id}/schedules/update.json`,
			schedules);
	}
}


module.exports = ProfilesClient;
