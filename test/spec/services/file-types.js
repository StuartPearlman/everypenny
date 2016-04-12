'use strict';

describe('Service: fileTypes', function () {

  // load the service's module
  beforeEach(module('everyPenny'));

  // instantiate service
  var fileTypes;
  beforeEach(inject(function (_fileTypes_) {
    fileTypes = _fileTypes_;
  }));

  it('should do something', function () {
    expect(!!fileTypes).toBe(true);
  });

});
