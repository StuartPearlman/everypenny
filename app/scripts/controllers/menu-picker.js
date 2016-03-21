'use strict';

angular.module('everyPenny')

.controller('MenuPicker', function(Menu) {
  this.menu = new Menu({ budget: 12 });
});
