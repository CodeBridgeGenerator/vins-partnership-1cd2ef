const assert = require('assert');
const app = require('../../src/app');

describe('\'sectionContents\' service', () => {
  it('registered the service', () => {
    const service = app.service('sectionContents');

    assert.ok(service, 'Registered the service (sectionContents)');
  });
});
