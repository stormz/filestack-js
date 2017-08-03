import filestack = require('../index');

const client = filestack.init('fakekey');
const url = 'fakeurl';
client.setSecurity({ policy: 'fakepolicy', signature: 'fakesignature' });
client.transform(url, { flip: true });
