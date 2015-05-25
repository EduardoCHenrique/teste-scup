'use strict';

/**
 * @ngdoc function
 * @name scupTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scupTestApp
 */
angular.module('scupTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
});
