'use strict';

angular.module('app', ['ngRoute', 'ui.composite'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      });
  })
  .controller('MainCtrl', function ($scope, $interval) {
    $interval(function () {
      $scope.randomValue = Math.floor(Math.random() * 100);
    }, 500);
  })
  .directive('wtTime', function ($interval) {
    return {
      restrict: 'A',
      scope: true,
      replace: true,
      template: '<div>Time<div class="alert alert-warning">{{time}}</div></div>',
      link: function (scope) {
        function update() {
          scope.time = new Date().toLocaleTimeString();
        }

        update();

        var promise = $interval(update, 500);

        scope.$on('$destroy', function () {
          $interval.cancel(promise);
        });
      }
    };
  });