var assert = require('assert');
var urlbox = require('../lib/index');

describe('URLBOX', function () {
  it('should work generate valid api url', function () {

    var buildUrl = urlbox('apple.com', {});

    assert.equal(buildUrl, 'https://api.urlbox.io/v1/your-key/your-token/png?url=apple.com');
  });


});