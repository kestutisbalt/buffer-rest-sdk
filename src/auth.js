let Api = require('./api.js');

/**
 * Buffer API wrapper for authentication.
 */
class Auth {
	constructor(clientId, clientSecret, redirectUri) {
		this.clientId = clientId;
		this.clientSecret = clientSecret;
		this.redirectUri = redirectUri;
	}

	/**
	 * Returns url redirect user to for granting permission for an application.
	 * @return {string} Authorization url.
	 */
	authUrl() {
		return 'https://bufferapp.com/oauth2/authorize?'
			+ `client_id=${encodeURIComponent(this.clientId)}`
			+ `&redirect_uri=${encodeURIComponent(this.redirectUri)}`
			+ '&response_type=code';
	}

	/**
	 * Requests for access token.
	 * @param {string} code - Auth code provided by Buffer.
	 * @return {object} Buffer api result.
	 */
	requestAccessToken(code) {
		const api = new Api();
		return api.post('/oauth2/token.json', {
			client_id: this.clientId,
			client_secret: this.clientSecret,
			redirect_uri: this.redirectUri,
			code,
			grant_type: 'authorization_code',
		});
	}
}

module.exports = Auth;
