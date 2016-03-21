'use strict';

angular.module('everyPenny')

.factory('Menu', function() {
  var Menu = function(configOptions) {
    this.budget = configOptions.budget || 0;
    this.menuItems = configOptions.menuItems || [];
  };

  return Menu;
});
