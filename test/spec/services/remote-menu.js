'use strict';

describe('Service: remoteMenu', function () {

  // load the service's module
  beforeEach(module('everyPenny'));

  // instantiate service
  var remoteMenu;
  beforeEach(inject(function (_remoteMenu_) {
    remoteMenu = _remoteMenu_;
  }));

  it('should do something', function () {
    expect(!!remoteMenu).toBe(true);
  });

});
