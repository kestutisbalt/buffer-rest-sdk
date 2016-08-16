let chai = require('chai');
let expect = chai.expect;
let sinon = require('sinon');

let Client = require('../src/client.js');

describe('Client', () => {
	describe('Constructor', () => {
		it('should throw if token is undefined', () => {
			//Given
			let exception = null;

			//When
			try {
				new Client;
			} catch(e) {
				exception = e;
			}

			//Then
			expect(exception).to.be.an.instanceof(Error);
		});

		it('should initialize user client with api', () => {
			//Given
			let token = 'token';

			//When
			let client = new Client(token);

			//Then
			expect(client.user.api.token).to.equal(token);
		});

		it('should initialize profiles client with api', () => {
			//Given
			let token = 'token';

			//When
			let client = new Client(token);

			//Then
			expect(client.profiles.api.token).to.equal(token);
		});

		it('should initialize updates client with api', () => {
			//Given
			let token = 'token';

			//When
			let client = new Client(token);

			//Then
			expect(client.updates.api.token).to.equal(token);
		});
	});
});
