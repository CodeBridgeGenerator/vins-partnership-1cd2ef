const assert = require('assert');
const app = require('../../src/app');

describe('\'textExtractionQueues\' service', () => {
  it('registered the service', () => {
    const service = app.service('textExtractionQueues');

    assert.ok(service, 'Registered the service (textExtractionQueues)');
  });
});
