angular.module('app.directives.contactEditor', [])
  .directive('contactEditor', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: false,
      templateUrl: 'javascripts/lib/templates/contactEdit.html',
      link: function (scope, element, attrs) {
        element.find('button').on('click', function (evt) {
          if (evt && evt.preventDefault)
            evt.preventDefault();

          var newPerson = scope.person;
          scope.person = {};
          scope.$digest();
          scope.persons.push(newPerson);
          scope.$digest();
        });
      },
      controller: function ($scope) {
        if (!$scope.persons) $scope.persons = [];
        if (!$scope.person) $scope.person = {};
      }
    }
  });
