'use strict';

angular.module('everyPenny')

.service('remoteMenu', function($http) {
  this.get = function(url) {
    // Simple workaround for CORS support. Not production stable.
    let corsProxy = 'https://ep-simple-corsproxy.herokuapp.com/';

    return $http.get(corsProxy + url);
  };
});
