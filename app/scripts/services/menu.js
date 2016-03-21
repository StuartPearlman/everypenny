'use strict';

angular.module('everyPenny')

.factory('Menu', function() {
  var toHundrethsPlace = function(number) {
    return Math.round(number * 100) / 100;
  };

  var Menu = function(configOptions) {
    this.budget = configOptions.budget || 0;
    this.menuItems = configOptions.menuItems || [];
    this.menuString = configOptions.menuString || '';

    this.clearMenuString = function() {
      this.menuString = '';
    };

    this.generateMenu = function(total, returnedMenuItemsString, menu) {
      total = toHundrethsPlace(total || this.budget);
      returnedMenuItemsString = returnedMenuItemsString || '';
      menu = menu || this.menuItems;

      var cachedMenu = JSON.parse(JSON.stringify(menu));

      menu.forEach(function(item) {
        var price = toHundrethsPlace(item.price);
        if (total - price === 0) {
          if (this.menuString) {
            this.menuString = this.menuString + ' AND';
          }
          this.menuString = this.menuString + returnedMenuItemsString + ' ' + item.name;
          return;
        }
        if (total - price > 0) {
          this.generateMenu(total - price, returnedMenuItemsString + ' ' + item.name, cachedMenu);
        }
        for (var i = 0; i < cachedMenu.length; i++) {
          if (cachedMenu[i].name === item.name) {
            cachedMenu.splice(i, 1);
            break;
          }
        }
      }.bind(this));
    };
  };

  return Menu;
});
