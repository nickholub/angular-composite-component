'use strict';

angular.module('ui.composite', [])
  .directive('csComposite', function ($compile) {
    return {
      restrict: 'A',
      controller: function ($scope) {
        $scope.widgetTranscludes = [];
        $scope.widgetDefs = [];
        $scope.transcludes = {};

        this.registerTransclude = function (directiveTransclude) {
          var id = directiveTransclude.id;
          $scope.transcludes[id] = directiveTransclude;
        };

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
        var templateString = '<div ng-include="\'directive/angular-composite-component.html\'"></div>';
        var contentElement = angular.element(templateString);
        element.append(contentElement);
        $compile(contentElement)(scope);
      }
    };
  })
  // directive to capture "wt-section" content
  .directive('csSection', function () {
    return {
      transclude: 'element',
      priority: 100,
      require: '^csComposite',
      link: function (scope, element, attrs, ctrl, $transclude) {
        var directiveTransclude = {
          id: attrs.csSection,
          transclude: $transclude,
          element: element
        };

        ctrl.registerTransclude(directiveTransclude);
      }
    };
  })
  // directive to capture "cs-widget" content
  .directive('csWidget', function () {
    return {
      transclude: 'element',
      priority: 100,
      require: '^csComposite',
      link: function (scope, element, attrs, ctrl, $transclude) {
        var widgetTransclude = {
          transclude: $transclude,
          element: element,
          name: attrs.csName
        };

        ctrl.addWidgetTransclude(widgetTransclude);
      }
    };
  })
  // directive to output "cs-section" content
  .directive('csTransclude', function () {
    return {
      transclude: true,
      link: function (scope, element, attrs) {
        var id = attrs.csTransclude;
        var directiveTransclude = scope.transcludes[id];
        if (directiveTransclude) {
          var selectedScope = scope.$new();
          directiveTransclude.transclude(selectedScope, function (clone) {
            element.append(clone);
          });
        }
      }
    };
  })
  // directive to output "cs-widget" content
  .directive('csWidgetTransclude', function () {
    return {
      transclude: true,
      link: function (scope, element, attrs) {
        var widgetDef = scope.$eval(attrs.csWidgetTransclude);
        var selectedScope = scope.$new();
        var widgetTransclude = scope.widgetTranscludes[widgetDef.id];

        widgetTransclude.transclude(selectedScope, function (clone) {
          element.append(clone);
        });
      }
    };
  });

