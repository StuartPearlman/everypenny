'use strict';

angular.module('everyPenny')

.service('remoteMenu', function($http, $q, _) {
  let parseResponse = function(response) {
    let textfileArray = response.data.match(/[^\n]+/g);
    let budget = _.round(textfileArray.shift().replace(/\$/g, ''), 2);
    let menuItems = [];

    textfileArray.forEach((menuItem) => {
      let menuItemArray = menuItem.split(',');
      menuItems.push({
        name: menuItemArray[0],
        price: _.round(menuItemArray[1].replace(/\$/g, ''), 2)
      });
    });

    let parsedResponse = {
      budget,
      menuItems
    };

    return parsedResponse;
  };

  this.get = function(url) {
    let corsProxy = 'https://crossorigin.me/'; // Icky icky ICKY! Never in prod. Just a workaround since I don't control the server.

    return $http.get(corsProxy + url)
    .then((response) => {
      return parseResponse(response);
    });
  };
});
