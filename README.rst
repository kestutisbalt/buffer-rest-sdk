===============
Buffer REST SDK
===============

Node.js SDK designed to work with
`Buffer's REST API <https://buffer.com/developers/api>`_. This SDK is a wrapper
for Buffer's REST API. For full specification regarding entities used in this
library refer to `Buffer's official
documentation <https://buffer.com/developers/api>`_.


Requirements
============

- Node.js v6.3.1 or later


Installation
============

::

	$ npm install buffer-rest-sdk


Get Started
===========

To write an app using SDK:

- Require 'buffer-rest-sdk' in your file

	.. code-block:: javascript

		let Buffer = require('buffer-rest-sdk');

- Create Buffer client with authorization token

	.. code-block:: javascript

		let buffer = new Buffer.Client('1/mWot20jTwojsd00jFlaaR45');

- Invoke the rest api (eg: get user info)

	.. code-block:: javascript

		buffer.user.getUser().then((user) => {
			console.log(user);
		}).catch((error) => {
			console.log(error);
		});
