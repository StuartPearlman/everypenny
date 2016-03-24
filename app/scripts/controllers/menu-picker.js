'use strict';

angular.module('everyPenny')

.controller('MenuPicker', function(Menu) {
  this.menu = new Menu();

  this.menu.getRemoteMenu().then(() => this.menu.generateMenu());
});
