let chai = require('chai');
let expect = chai.expect;
let sinon = require('sinon');

chai.use(require('chai-as-promised'));
chai.should();

let Api = require('../src/api.js');
let UpdatesClient = require('../src/updates_client.js');


describe('UpdatesClient', () => {
	describe('Constructor', () => {
		it('should throw if api is not instance of Api', () => {
			//Given
			let exception = null;

			//When
			try {
				new UpdatesClient;
			} catch(e) {
				exception = e;
			}

			//Then
			expect(exception).to.be.an.instanceof(Error);
		});
	});

	describe('getUpdate', () => {
		it('should return promise that resolves to update', () => {
			//Given
			let updateId = '4690f5ee267b949065250ae';
			let response = { id: updateId };
			let options = {
				utc: true
			};

			let api = sinon.createStubInstance(Api);
			api.get.withArgs(`/updates/${updateId}.json`, options)
				.returns(Promise.resolve(response));

			let updatesClient = new UpdatesClient(api);

			//When
			let promise = updatesClient.getUpdate(updateId, options);

			//Then
			return promise.should.eventually.deep.equal(response);
		});
	});

	describe('getPendingUpdates', () => {
		it('should return promise that resolves to pending updates', () => {
			//Given
			let profileId = '4690f5ee267b94458123cd';
			let response = {
				total: 0,
				updates: []
			};
			let options = {
				utc: true
			};

			let api = sinon.createStubInstance(Api);
			api.get.withArgs(`/profiles/${profileId}/updates/pending.json`,
				options).returns(Promise.resolve(response));

			let updatesClient = new UpdatesClient(api);

			//When
			let promise = updatesClient.getPendingUpdates(profileId, options);

			//Then
			return promise.should.eventually.deep.equal(response);
		});
	});

	describe('getSentUpdates', () => {
		it('should return promise that resolves to sent updates', () => {
			//Given
			let profileId = '4690f5ee267b94458123cd';
			let response = {
				total: 0,
				updates: []
			};
			let options = {
				utc: true
			};

			let api = sinon.createStubInstance(Api);
			api.get.withArgs(`/profiles/${profileId}/updates/sent.json`,
				options).returns(Promise.resolve(response));

			let updatesClient = new UpdatesClient(api);

			//When
			let promise = updatesClient.getSentUpdates(profileId, options);

			//Then
			return promise.should.eventually.deep.equal(response);
		});
	});
});
