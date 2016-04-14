'use strict';

angular.module('everyPenny', [])

.run(function($rootScope, $window) {
  $window.onerror = function() {
    $rootScope.isError = true;
    $rootScope.$digest();
    return true;
  };
});
