let chai = require('chai');
let expect = chai.expect;

let Api = require('../src/api.js');
let InfoClient = require('../src/info_client.js');


describe('InfoClient', () => {
	describe('Constructor', () => {
		it('should throw if api is not instance of Api', () => {
			//Given
			let exception = null;

			//When
			try {
				new InfoClient;
			} catch(e) {
				exception = e;
			}

			//Then
			expect(exception).to.be.an.instanceof(Error);
		});
	});
});
