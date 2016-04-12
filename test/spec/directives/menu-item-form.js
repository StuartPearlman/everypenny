'use strict';

describe('Directive: menuItemForm', function () {

  // load the directive's module
  beforeEach(module('everyPenny'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<menu-item-form></menu-item-form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the menuItemForm directive');
  }));
});
