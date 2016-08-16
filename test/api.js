let chai = require('chai');
let expect = chai.expect;
let nock = require('nock');

let Api = require('../src/api.js');
let BufferError = require('../src/error.js');

describe('Api', () => {

	after(() => {
		nock.restore();
	});

	describe('Constructor', () => {
		it('should throw if token is undefined', () => {
			//Given
			let exception = null;

			//When
			try {
				new Api;
			} catch(e) {
				exception = e;
			}

			//Then
			expect(exception).to.be.an.instanceof(Error);
		});
	});

	describe('get', () => {
		it('should set authorization header', (done) => {
			//Given
			let token = 'token';
			let route = '/route';

			let request = nock(Api.baseUrl(), {
				reqheaders: {
					'Authorization': `Bearer ${token}`
				}
			}).get(route).reply(200);

			//When
			let api = new Api(token);

			//Then
			api.get(route).then(() => {
				request.done();
				done();
			});
		});

		it('should set query parameters', (done) => {
			//Given
			let route = '/route';

			let request = nock(Api.baseUrl())
				.get(`${route}?limit=10`)
				.reply(200);

			//When
			let api = new Api('token');

			//Then
			api.get(route, { limit: 10 }).then(() => {
				request.done();
				done();
			});
		});

		it('should return promise that resolves to Object', () => {
			//Given
			let token = 'token';
			let route = '/route';
			let response = {};

			let request = nock(Api.baseUrl())
				.get(route).reply(200, response);

			//When
			let api = new Api(token);

			//Then
			return api.get(route).then((value) => {
				request.done();
				expect(value).to.deep.equal(response);
			});
		});

		it('should return promise that rejects with Error', (done) => {
			//Given
			let token = 'token';
			let route = '/route';
			let response = {};

			let request = nock(Api.baseUrl())
				.get(route).replyWithError('message');

			//When
			let api = new Api('token');

			//Then
			api.get(route).catch((value) => {
				expect(value).to.be.an.instanceof(Error);
				done();
			});
		});

		it('should return promise that rejects with BufferError', (done) => {
			//Given
			let route = '/route';
			let error = {
					code: 401,
					error: 'Unauthorized'
			};

			let request = nock(Api.baseUrl())
				.get(route).reply(401, error);

			//When
			let api = new Api('token');

			//Then
			api.get(route).catch((value) => {
				expect(value).to.be.an.instanceof(BufferError);
				expect(value).to.deep.equal(
					new BufferError(error.code, error.error));
				done();
			});
		});
	});

	describe('post', () => {
		it('should set authorization header', (done) => {
			//Given
			let token = 'token';
			let route = '/route';

			let request = nock(Api.baseUrl(), {
				reqheaders: {
					'Authorization': `Bearer ${token}`
				}
			}).post(route).reply(200);

			//When
			let api = new Api(token);

			//Then
			api.post(route).then(() => {
				request.done();
				done();
			});
		});

		it('should send form parameters', (done) => {
			//Given
			let token = 'token';
			let route = '/route';
			let form = {
				id: '1'
			};

			let request = nock(Api.baseUrl(), {
				reqheaders: {
					'Authorization': `Bearer ${token}`,
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).post(route, form).reply(200);

			//When
			let api = new Api(token);

			//Then
			api.post(route, form).then(() => {
				request.done();
				done();
			});
		});

		it('should return promise that resolves to Object', () => {
			//Given
			let token = 'token';
			let route = '/route';
			let response = {};

			let request = nock(Api.baseUrl())
				.post(route).reply(200, response);

			//When
			let api = new Api(token);

			//Then
			return api.post(route).then((value) => {
				request.done();
				expect(value).to.deep.equal(response);
			});
		});

		it('should return promise that rejects with Error', (done) => {
			//Given
			let token = 'token';
			let route = '/route';
			let response = {};

			let request = nock(Api.baseUrl())
				.post(route).replyWithError('message');

			//When
			let api = new Api('token');

			//Then
			api.post(route).catch((value) => {
				expect(value).to.be.an.instanceof(Error);
				done();
			});
		});

		it('should return promise that rejects with BufferError', (done) => {
			//Given
			let route = '/route';
			let error = {
					code: 401,
					error: 'Unauthorized'
			};

			let request = nock(Api.baseUrl())
				.post(route).reply(401, error);

			//When
			let api = new Api('token');

			//Then
			api.post(route).catch((value) => {
				expect(value).to.be.an.instanceof(BufferError);
				expect(value).to.deep.equal(
					new BufferError(error.code, error.error));
				done();
			});
		});
	});
});
