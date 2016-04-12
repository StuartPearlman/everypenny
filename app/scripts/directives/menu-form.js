'use strict';

angular.module('everyPenny')

.directive('epMenuForm', function () {
  return {
    templateUrl: 'views/directives/menu-form.html',
    restrict: 'E',
    scope: {
      menu: '='
    },
    link: function(scope, element, attrs) {
      scope.item = {};

      scope.addMenuItem = (item) => {
        scope.menu.menuItems.push(item);
        scope.item = {};
      }
    }
  };
});
