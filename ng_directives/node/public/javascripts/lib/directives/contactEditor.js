angular.module('app.directives.contactEditor', [])
  .directive('contactEditor', function () {
    var setFromSelect = false;
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'javascripts/lib/templates/contactEdit.html',
      link: function (scope, element, attrs) {
        element.find('button').on('click', function (evt) {
          if (evt && evt.preventDefault)
            evt.preventDefault();

          var newPerson = scope.person;
          scope.person = {};
          scope.$digest();
          if (!setFromSelect) {
            scope.persons.push(newPerson);
            scope.$apply();
          }
          setFromSelect = false;
        });
      },
      controller: function ($scope) {
        $scope.$on('select-contact', function (evt, data) {
          $scope.person = data;
          setFromSelect = true;
          $scope.$digest();
        });
      }
    }
  });
