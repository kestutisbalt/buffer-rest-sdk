let chai = require('chai');
let expect = chai.expect;

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

		it('should initialize with token', () => {
			//Given
			let token = 'token';

			//When
			let client = new Client(token);

			//Then
			expect(client.token).to.equal(token);
		});
	});
});
