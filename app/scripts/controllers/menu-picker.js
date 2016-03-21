'use strict';

angular.module('everyPenny')

.controller('MenuPicker', function(Menu) {
  this.menu = new Menu({
    budget: 15.05,
    menuItems: [{
      name: 'mixed fruit',
      price: 2.15
    }, {
      name: 'french fries',
      price: 2.75
    }, {
      name: 'side salad',
      price: 3.35
    }, {
      name: 'hot wings',
      price: 3.55
    }, {
      name: 'mozzarella sticks',
      price: 4.20
    }, {
      name: 'sampler plate',
      price: 5.80
    }]
  });
});
