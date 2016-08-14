class Client {
	constructor(token) {
		if (!token) {
			throw new Error('token is undefined');
		}
		this.token = token;
	}
}

module.exports = Client;
