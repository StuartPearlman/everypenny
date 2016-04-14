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
        scope.buttonHover = false;
        scope.item = {};
        element[0].querySelector('input[type="text"]').focus();
      }
    }
  };
});
