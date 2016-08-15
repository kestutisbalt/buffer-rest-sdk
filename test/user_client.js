let chai = require('chai');
let expect = chai.expect;
let sinon = require('sinon');

let UserClient = require('../src/user_client.js');
let Api = require('../src/api.js');


describe('UserClient', () => {
	describe('Constructor', () => {
		it('should throw if api is not instance of Api', () => {
			//Given
			let exception = null;

			//When
			try {
				new UserClient;
			} catch(e) {
				exception = e;
			}

			//Then
			expect(exception).to.be.an.instanceof(Error);
		});
	});

	describe('getUser', () => {
		it('should return promise that resolves to user object', () => {
			//Given
			let response = {
				id: '14f0c0a06512f7ef214000000'
			};

			let api = sinon.createStubInstance(Api);
			api.get.withArgs('/user.json')
				.returns(Promise.resolve(response));

			//When
			let userClient = new UserClient(api);
			let promise = userClient.getUser();

			//Then
			return promise.then((user) => {
				expect(user).to.deep.equal(response);
			});
		});
	});

	describe('deauthorize', () => {
		it('should return promise that resolves to success status', () => {
			//Given
			let response = {
				success: true,
				message: 'Access successfully revoked!'
			};

			let api = sinon.createStubInstance(Api);
			api.post.withArgs('/user/deauthorize.json')
				.returns(Promise.resolve(response));

			//When
			let userClient = new UserClient(api);
			let promise = userClient.deauthorize();

			//Then
			return promise.then((result) => {
				expect(result).to.deep.equal(response);
			});
		});
	});
});
