'use strict';

describe('Filter: round', function () {

  // load the filter's module
  beforeEach(module('everyPenny'));

  // initialize a new instance of the filter before each test
  var round;
  beforeEach(inject(function ($filter) {
    round = $filter('round');
  }));

  it('should return the input prefixed with "round filter:"', function () {
    var text = 'angularjs';
    expect(round(text)).toBe('round filter: ' + text);
  });

});
