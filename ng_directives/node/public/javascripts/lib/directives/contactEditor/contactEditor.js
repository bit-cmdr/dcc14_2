angular.module('app.directives.contactEditor', [])
  .directive('contactEditor', ['contactService',
    function (contactService) {
      var setFromSelect = false;
      return {
        restrict: 'E',
        replace: true,
        scope: {
          contact: '=?'
        },
        templateUrl: 'javascripts/lib/directives/contactEditor/contactEdit.html',
        link: function (scope, element, attrs) {
          element.find('button').on('click', function (evt) {
            if (evt && evt.preventDefault)
              evt.preventDefault();

            var newPerson = scope.contact;
            scope.contact = {};
            scope.$digest();
            if (!setFromSelect) {
              contactService.addContact(newPerson);
            }
            setFromSelect = false;
          });
        },
        controller: function ($scope) {
          $scope.$on('contact.select', function (evt, data) {
            $scope.contact = data;
            setFromSelect = true;
            $scope.$digest();
          });
        }
      }
  }]);
