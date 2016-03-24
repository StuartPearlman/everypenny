'use strict';

angular.module('everyPenny')

.factory('Menu', function($http, remoteMenu, _) {
  let Menu = function(configOptions = {}) {
    this.budget = configOptions.budget || 0;
    this.menuItems = configOptions.menuItems || [];
    this.menuString = configOptions.menuString || '';

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

    this.getRemoteMenu = function() {
      this.url = 'https://tablexi-prod.s3.amazonaws.com/comfy/cms/files/files/000/000/007/original/menu.txt';

      return remoteMenu.get(this.url)
      .then((response) => {
        this.budget = response.budget;
        this.menuItems = response.menuItems;
      })
      .catch((error) => {
        this.error = error;
      });
    }
  };

  return Menu;
});
