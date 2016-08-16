let chai = require('chai');
let expect = chai.expect;
let sinon = require('sinon');

chai.use(require('chai-as-promised'));
chai.should();

let Api = require('../src/api.js');
let ProfilesClient = require('../src/profiles_client.js');


describe('ProfilesClient', () => {
	describe('Constructor', () => {
		it('should throw if api is not instance of Api', () => {
			//Given
			let exception = null;

			//When
			try {
				new ProfilesClient;
			} catch(e) {
				exception = e;
			}

			//Then
			expect(exception).to.be.an.instanceof(Error);
		});
	});

	describe('getProfiles', () => {
		it('should return promise that resolves to profiles', () => {
			//Given
			let response = [
				{
					id: '5690f5ee267b949065250ae'
				}
			];

			let api = sinon.createStubInstance(Api);
			api.get.withArgs('/profiles.json')
				.returns(Promise.resolve(response));

			let profilesClient = new ProfilesClient(api);

			//When
			let promise = profilesClient.getProfiles();

			//Then
			return promise.should.eventually.deep.equal(response);
		});
	});

	describe('getProfile', () => {
		it('should return promise that resolves to profile', () => {
			//Given
			let profileId = '5690f5ee267b949065250ae';

			let response = { id: profileId };

			let api = sinon.createStubInstance(Api);
			api.get.withArgs(`/profiles/${profileId}.json`)
				.returns(Promise.resolve(response));

			let profilesClient = new ProfilesClient(api);

			//When
			let promise = profilesClient.getProfile(profileId);

			//Then
			return promise.should.eventually.deep.equal(response);
		});
	});

	describe('getProfileSchedules', () => {
		it('should return promise that resolves to profile schedules', () => {
			//Given
			let profileId = '5690f5ee267b949065250ae';
			let response = [
				{
					days: [ 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun' ],
					times: [ '07:56', '14:03', '16:11', '20:57' ]
				}
			];

			let api = sinon.createStubInstance(Api);
			api.get.withArgs(`/profiles/${profileId}/schedules.json`)
				.returns(Promise.resolve(response));

			let profilesClient = new ProfilesClient(api);

			//When
			let promise = profilesClient.getProfileSchedules(profileId);

			//Then
			return promise.should.eventually.deep.equal(response);
		});
	});

	describe('updateProfileSchedules', () => {
		it('should return promise that resolves to update profile schedules response', () => {
			//Given
			let profileId = '5690f5ee267b949065250ae';
			let schedules = [
				{
					days: [ 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun' ],
					times: [ '07:56', '14:03', '16:11', '20:57' ]
				}
			];
			let response = {
				success: true,
				message: 'Schedule saved successfully'
			};

			let api = sinon.createStubInstance(Api);
			api.post.withArgs(`/profiles/${profileId}/schedules/update.json`)
				.returns(Promise.resolve(response));

			let profilesClient = new ProfilesClient(api);

			//When
			let promise = profilesClient.updateProfileSchedules(
				profileId, schedules);

			//Then
			return promise.should.eventually.deep.equal(response);
		});
	});
});
