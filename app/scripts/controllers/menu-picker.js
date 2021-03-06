'use strict';

angular.module('everyPenny')

.controller('MenuPicker', function(Menu, FILE_TYPES, CARDS, $rootScope) {
  this.CARDS = CARDS;
  this.FILE_TYPES = FILE_TYPES;

  this.menu = new Menu();
  this.card = CARDS.WELCOME;

  this.startOver = (inputType) => {
    this.menu = new Menu();

    if (inputType) {
      this.inputType = inputType;
    } else {
      this.inputType = undefined;
      this.card = CARDS.INPUT;
    }

    $rootScope.isError = false;
  };

  this.returnToManualInput = () => {
    this.menu.isGenerated = false;
    this.inputType = FILE_TYPES.MANUAL;
    this.clearHover();
  };

  this.removeMenuItem = (item) => {
    _.remove(this.menu.menuItems, item);
    this.clearHover();
  };

  this.clearHover = () => {
    this.actionHover = false;
    this.linkHover = false;
    this.deleteHover = '';
  };

  this.inputs = [{
    type: FILE_TYPES.FILE,
    buttonText: 'Use text file',
    label: 'You\'d like to upload a text file of your budget and menu.'
  },{
    type: FILE_TYPES.URL,
    buttonText: 'Enter a URL',
    label: 'You have the URL of a text file of your budget and menu.'
  },{
    type: FILE_TYPES.MANUAL,
    buttonText: 'Input menu items manually',
    label: 'Input your budget and menu by hand.'
  }];
});
