let Api = require('./api.js');
let UserClient = require('./user_client.js');

class Client {
	constructor(token) {
		if (!token) {
			throw new Error('token is undefined');
		}
		let api = new Api(token);

		this.user = new UserClient(api);
	}
}

module.exports = Client;
