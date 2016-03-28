'use strict';

angular.module('everyPenny')

.directive('epFileReader', function() {
  return {
    restrict: 'A',
    scope: {
      onFileLoaded: '&'
    },
    link: function(scope, element) {
      element[0].onchange = function() {
        let reader = new FileReader();

        reader.onload = function(event) {
          scope.onFileLoaded({ data: event.target.result });
          scope.$apply();
        };

        reader.readAsText(this.files[0]);
      };
    }
  };
});
