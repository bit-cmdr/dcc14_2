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
        transclude: true,
        templateUrl: 'javascripts/lib/directives/contactEditor/contactEdit.html',
        link: function (scope, element, attrs, ctrl, $transclude) {
          console.log('ctrl', ctrl);
          console.log('transclude', $transclude);
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
          $transclude(scope, function (myStuff) {
            element.prepend(myStuff);
            element.append('<hr/>')
            console.log('myStuff', myStuff);
          })
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
