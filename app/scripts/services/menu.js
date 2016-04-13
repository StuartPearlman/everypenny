'use strict';

angular.module('everyPenny')

.factory('Menu', function($http, remoteMenu, _) {
  const Menu = function(configOptions = {}) {
    this.budget = configOptions.budget || 0;
    this.menuItems = configOptions.menuItems || [];
    this.possibleMenus = configOptions.possibleMenus || [];

    this.generateMenu = function(total, returnedMenuItemsString, menu) {
      total = _.round(total || this.budget, 2);
      returnedMenuItemsString = returnedMenuItemsString || '';
      menu = menu || this.menuItems;

      const cachedMenu = _.clone(menu);
      const addCommaIfNeeded = (string) => {
        if (string && !/,$/.test(string)) {
          return string += ',';
        } else {
          return string;
        }
      }

      menu.forEach((item) => {
        const price = _.round(item.price, 2);

        if (total - price === 0) {
          returnedMenuItemsString = addCommaIfNeeded(returnedMenuItemsString);
          this.possibleMenus.push(returnedMenuItemsString + item.name);
          return;
        }

        if (total - price > 0) {
          returnedMenuItemsString = addCommaIfNeeded(returnedMenuItemsString);
          this.generateMenu(total - price, returnedMenuItemsString + item.name, cachedMenu);
        }

        _.remove(cachedMenu, (cachedMenuItem) => cachedMenuItem.name === item.name);
      });
    };

    let parsePossibleMenu = function(possibleMenu) {
      possibleMenu = _.countBy(possibleMenu.split(','));
      const parsedMenu = [];

      _.each(possibleMenu, (value, key) => {
        parsedMenu.push(`${value} ${value > 1 ? 'orders' : 'order'} ${key}`);
      });

      return parsedMenu;
    };

    this.getPossibleMenus = function() {
      if (this.possibleMenus) {
        this.possibleMenus = [];
      }

      this.generateMenu();
      this.possibleMenus.forEach((possibleMenu, index) => {
        this.possibleMenus[index] = parsePossibleMenu(possibleMenu);
      });

      this.isGenerated = true;
    };

    this._parseTextFileData = function(data) {
      const textfileArray = data.match(/[^\n]+/g);
      this.budget = _.round(textfileArray.shift().replace(/\$/g, ''), 2);

      textfileArray.forEach((menuItem) => {
        const menuItemArray = menuItem.split(',');

        this.menuItems.push({
          name: menuItemArray[0],
          price: _.round(menuItemArray[1].replace(/\$/g, ''), 2)
        });
      });
    };

    this.getPossibleMenusFromUrl = function() {
      return remoteMenu.get(this.url)
      .then((response) => {
        this._parseTextFileData(response.data);
        this.getPossibleMenus();
      })
      .catch((error) => {
        this.error = error;
      });
    };

    this.getPossibleMenusFromFile = function(data) {
      this._parseTextFileData(data);
      this.getPossibleMenus();
    };
  };

  return Menu;
});
