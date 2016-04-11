'use strict';

angular.module('everyPenny')

.controller('MenuPicker', function(Menu) {
  this.menu = new Menu();

  this.menu.getPossibleMenusFromUrl();
});
