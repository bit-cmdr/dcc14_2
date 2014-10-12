var app = angular.module('app', [
    'app.contactService',
    'app.directives.contactEditor',
    'app.directives.contact'
  ]).controller('app.mainController', ['$scope', 'contactService',
    function ($scope, contactService) {
      $scope.contacts = contactService.contacts;
      $scope.$on('contact.selected', function (evt, data) {
        $scope.$broadcast('contact.select', data);
      });
      $scope.$on('contacts.update', function (evt) {
        $scope.contacts = contactService.contacts;
        $scope.$digest();
      });
  }]);
