const assert = require('assert');
const app = require('../../src/app');

describe('\'groundTruthQueues\' service', () => {
  it('registered the service', () => {
    const service = app.service('groundTruthQueues');

    assert.ok(service, 'Registered the service (groundTruthQueues)');
  });
});
