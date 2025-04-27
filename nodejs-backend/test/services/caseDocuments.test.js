const assert = require('assert');
const app = require('../../src/app');

describe('\'caseDocuments\' service', () => {
  it('registered the service', () => {
    const service = app.service('caseDocuments');

    assert.ok(service, 'Registered the service (caseDocuments)');
  });
});
