const assert = require('assert');
const app = require('../../src/app');

describe('\'histories\' service', () => {
  it('registered the service', () => {
    const service = app.service('histories');

    assert.ok(service, 'Registered the service (histories)');
  });
});
