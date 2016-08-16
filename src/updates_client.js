let Api = require('./api.js');


/**
 * Buffer API wrapper for updates related actions.
 */
class UpdatesClient {

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
	 * Requests for update.
	 * @param {string} id Update id
	 * @param {Object} options
	 * @return {Api.Response}
	 */
	getUpdate(id, options) {
		return this.api.get(`/updates/${id}.json`, options);
	}

	/**
	 * Requests for updates that are currently in the buffer
	 * for an individual social media profile.
	 * @param {string} profileId Profile id
	 * @param {Object} options
	 * @return {Api.Response}
	 */
	getPendingUpdates(profileId, options) {
		return this.api.get(`/profiles/${profileId}/updates/pending.json`,
			options);
	}

	/**
	 * Requests for updates that have been sent from the buffer
	 * for an individual social media profile.
	 * @param {string} profileId Profile id
	 * @param {Object} options
	 * @return {Api.Response}
	 */
	getSentUpdates(profileId, options) {
		return this.api.get(`/profiles/${profileId}/updates/sent.json`,
			options);
	}

	/**
	 * Requests for detailed information on interactions
	 * with the social media update such as retweets and likes.
	 * @param {string} id Update id
	 * @param {Object} options
	 * @return {Api.Response}
	 */
	getInteractionsForUpdate(id, options) {
		return this.api.get(`/updates/${id}/interactions.json`, options);
	}

	/**
	 * Requests to change order for updates that will
	 * be sent out of the buffer.
	 * @param {string} profileId Profile id
	 * @param {Object} options
	 * @return {Api.Response}
	 */
	reorderUpdates(profileId, options) {
		return this.api.post(`/profiles/${profileId}/updates/reorder.json`,
			options);
	}

	/**
	 * Requests to randomize order for updates that will
	 * be sent out of the buffer.
	 * @param {string} profileId Profile id
	 * @param {Object} options
	 * @return {Api.Response}
	 */
	shuffleUpdates(profileId, options) {
		return this.api.post(`/profiles/${profileId}/updates/shuffle.json`,
			options);
	}

	/**
	 * Requests to create update.
	 * @param {Array} profileIds An array of Buffer profile id's
	 * @param {Object} options
	 * @return {Api.Response}
	 */
	createUpdate(profileIds, options) {
		let updateObj = (options)? Object.assign({}, options) : {};
		if (profileIds) {
			updateObj.profile_ids = profileIds;
		}
		return this.api.post('/updates/create', updateObj);
	}

	/**
	 * Requests to make changes for an existing update.
	 * @param {string} id Update id
	 * @param {Object} options
	 * @return {Api.Response}
	 */
	updateUpdate(id, options) {
		return this.api.post(`/updates/${id}/update.json`, options);
	}

	/**
	 * Requests to immediately share a single pending update and recalculates
	 * times for updates remaining in the queue.
	 * @param {string} id Update id
	 * @return {Api.Response}
	 */
	shareUpdate(id) {
		return this.api.post(`/updates/${id}/share.json`);
	}

	/**
	 * Requests to permanently delete an existing status update.
	 * @param {string} id Update id
	 * @return {Api.Response}
	 */
	destroyUpdate(id) {
		return this.api.post(`/updates/${id}/destroy.json`);
	}

	/**
	 * Requests to move an existing status update to the top of the queue
	 * and recalculate times for all updates in the queue.
	 * @param {string} id Update id
	 * @return {Api.Response}
	 */
	moveUpdateToTop(id) {
		return this.api.post(`/updates/${id}/move_to_top.json`);
	}

	/**
	 * Requests to create an interaction(e.g comment) for update.
	 * @param {string} id Update id
	 * @param {string} text Text
	 * @param {string} event Event
	 * @return {Api.Response}
	 */
	createInteractionForUpdate(id, text, event = 'comment') {
		let options = {
			text: (text)? text : '',
			event: event
		};
		return this.api.post(`/updates/${id}/interactions/create.json`);
	}
}


module.exports = UpdatesClient;
