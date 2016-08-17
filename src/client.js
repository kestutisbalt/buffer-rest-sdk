let Api = require('./api.js');
let UserClient = require('./user_client.js');
let ProfilesClient = require('./profiles_client.js');
let UpdatesClient = require('./updates_client.js');
let InfoClient = require('./info_client.js');
let LinksClient = require('./links_client.js');


class Client {
	constructor(token) {
		if (!token) {
			throw new Error('token is undefined');
		}
		let api = new Api(token);

		this.user = new UserClient(api);
		this.profiles = new ProfilesClient(api);
		this.updates = new UpdatesClient(api);
		this.info = new InfoClient(api);
		this.links = new LinksClient(api);
	}
}


module.exports = Client;
