import filestack = require('../index');

const client = filestack.init('fakekey');
const url = 'fakeurl';
client.setSecurity({ policy: 'fakepolicy', signature: 'fakesignature' });
client.transform(url, { flip: true });
const onRetry = (retry: filestack.RetryObject) => {
  console.log(retry.location)
}
const onProgress = (progress: filestack.ProgressObject) => {
  console.log(progress.totalPercent)
}
client.upload('local_file', { onProgress, onRetry });

client.pick({
  fromSources: ['facebook', 'instagram'],
  accept: 'image/*',
  minFiles: 1,
  maxFiles: 5,
  preferLinkOverStore: true,
  uploadInBackground: false, 
});
