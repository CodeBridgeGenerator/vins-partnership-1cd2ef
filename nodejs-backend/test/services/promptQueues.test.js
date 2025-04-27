const assert = require('assert');
const app = require('../../src/app');

describe('\'promptQueues\' service', () => {
  it('registered the service', () => {
    const service = app.service('promptQueues');

    assert.ok(service, 'Registered the service (promptQueues)');
  });
});
