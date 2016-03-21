'use strict';

describe('Controller: MenuPickerCtrl', function () {

  // load the controller's module
  beforeEach(module('everyPenny'));

  var MenuPickerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuPickerCtrl = $controller('MenuPickerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MenuPickerCtrl.awesomeThings.length).toBe(3);
  });
});
