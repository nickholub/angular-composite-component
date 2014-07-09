'use strict';

angular.module('ui.composite', [])
  .directive('wtComposite', function ($compile) {
    return {
      restrict: 'A',
      controller: function ($scope) {
        $scope.widgetTranscludes = [];
        $scope.widgetDefs = [];

        this.addWidgetTransclude = function (widgetTransclude) {
          var widgetDef = {
            id: $scope.widgetDefs.length, // index in widgetTranscludes array
            name: widgetTransclude.name
          };

          $scope.widgetDefs.push(widgetDef);
          $scope.widgetTranscludes.push(widgetTransclude);
        };
      },
      link: function (scope, element) {
        var templateString = '<div ng-include="\'composite.html\'"></div>';
        var contentElement = angular.element(templateString);
        element.append(contentElement);
        $compile(contentElement)(scope);
      }
    };
  })
  .directive('wtWidgetTransclude', function ($animate) {
    return {
      transclude: true,
      link: function (scope, element, attrs) {
        var widgetDef = scope.$eval(attrs.wtWidgetTransclude);
        var selectedScope = scope.$new();
        var widgetTransclude = scope.widgetTranscludes[widgetDef.id];

        widgetTransclude.transclude(selectedScope, function (copy) {
          $animate.enter(copy, element);
        });
      }
    };
  })
  .directive('wtWidget', function () {
    return {
      transclude: 'element',
      priority: 100,
      require: '^wtComposite',
      link: function (scope, element, attrs, ctrl, $transclude) {
        var widgetTransclude = {
          transclude: $transclude,
          element: element,
          name: attrs.wtName
        };

        ctrl.addWidgetTransclude(widgetTransclude);
      }
    };
  });

