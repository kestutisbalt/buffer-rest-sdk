let chai = require('chai');
let expect = chai.expect;
let sinon = require('sinon');

let Api = require('../src/api.js');
let LinksClient = require('../src/links_client.js');


describe('InfoClient', () => {
	describe('Constructor', () => {
		it('should throw if api is not instance of Api', () => {
			//Given
			let exception = null;

			//When
			try {
				new LinksClient;
			} catch(e) {
				exception = e;
			}

			//Then
			expect(exception).to.be.an.instanceof(Error);
		});
	});

	describe('getShares', () => {
		it('should throw if url is null', () => {
			//Given
			let api = sinon.createStubInstance(Api);

			//When
			let linksClient = new LinksClient(api);

			//Then
			expect(linksClient.getShares.bind(linksClient)).to.throw();
		});
	});
});
