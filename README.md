# Buffer REST SDK

Node.js SDK designed to work with
[Buffer's REST API](https://buffer.com/developers/api). This SDK is a wrapper
for Buffer's REST API. For full specification regarding entities used in this
library refer to [Buffer's official
documentation](https://buffer.com/developers/api).
**Note: This is a personal project and it is not provided by
[Buffer](https://buffer.com)**.


## Requirements

- Node.js v6.3.1 or later


## Installation

```sh
$ npm install kestutisbalt/buffer-rest-sdk
```

## Get Started

To write an app using SDK:

  * Require 'buffer-rest-sdk' in your file

    ```js
    let Buffer = require('buffer-rest-sdk');
    ```

  * Create Buffer client with authorization token

    ```js
    let buffer = new Buffer.Client('1/mWot20jTwojsd00jFlaaR45');
    ```

  * Invoke the rest api (eg: get user info)

    ```js
    buffer.user.getUser().then((user) => {
      console.log(user);
    }).catch((error) => {
      console.log(error);
    });
    ```


## Request access token for a user

  * To request access token user must be redirected to Buffer authorization url.
    To get authorization url:

    ```js
    const BufferAuth = require('buffer-rest-sdk').Auth;

	// Client id provided by Buffer.
	const clientId = '';
	// Client secret provided by Buffer.
	const clientSecret = '';
	// Redirect url specified when registered app in Buffer.
	const redirectUri = '';

	const bufferAuth = new BufferAuth(clientId, clientSecret, redirectUri);

	// Returns authorization url redirect user to.
	const authUrl = bufferAuth.authUrl();
    ```

  * When user gives permission for your application to access Buffer account.
    Buffer will redirect user to a link provided in `redirectUri` variable.
    Pass `code` parameter set as query argument to a method below:

    ```js
    // Code returned as query parameter from Buffer.
    const code = '';

    bufferAuth.requestAccessToken(code).then((result) => {
      console.log(result.access_token);
    }).catch((error) => {
      console.log(error);
    });
    ```


## License

Code released under [LICENSE](LICENSE)


## Contributions

Pull requests are welcome.
