'use strict';

angular.module('everyPenny')

.service('remoteMenu', function($http) {
  this.get = function(url) {
    // Icky icky ICKY! Never in prod. Just a workaround since I don't control the server.
    let corsProxy = 'https://crossorigin.me/';

    return $http.get(corsProxy + url);
  };
});
