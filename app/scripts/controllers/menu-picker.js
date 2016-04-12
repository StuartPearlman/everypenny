'use strict';

angular.module('everyPenny')

.controller('MenuPicker', function(Menu, FILE_TYPES, CARDS) {
  this.CARDS = CARDS;
  this.FILE_TYPES = FILE_TYPES;

  this.menu = new Menu();
  this.card = CARDS.WELCOME;

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

  // this.menu.getPossibleMenusFromUrl();
});
