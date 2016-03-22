'use strict';

angular.module('everyPenny')

.factory('Menu', function(_) {
  let Menu = function(configOptions) {
    this.budget = configOptions.budget || 0;
    this.menuItems = configOptions.menuItems || [];
    this.menuString = configOptions.menuString || '';

    this.clearMenuString = function() {
      this.menuString = '';
    };

    this.generateMenu = function(total, returnedMenuItemsString, menu) {
      total = _.round(total || this.budget, 2);
      returnedMenuItemsString = returnedMenuItemsString || '';
      menu = menu || this.menuItems;

      let cachedMenu = _.clone(menu);

      menu.forEach((item) => {
        let price = _.round(item.price, 2);

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

        _.remove(cachedMenu, (cachedMenuItem) => cachedMenuItem.name === item.name);
      });
    };
  };

  return Menu;
});
