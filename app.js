'use strict';

angular.module('app', ['ngRoute', 'ui.bootstrap', 'ui.composite'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../main.html',
        controller: 'MainCtrl'
      });
  })
  .controller('MainCtrl', function ($scope, $interval) {
    // random value
    $interval(function () {
      $scope.randomValue = Math.floor(Math.random() * 1000);
    }, 500);

    // percentage for progress bar
    $scope.percentage = 5;
    $interval(function () {
      $scope.percentage = ($scope.percentage + 10) % 100;
    }, 500);
  });