var app = angular.module('app', [
    'app.directives.contactEditor',
    'app.directives.contact'
  ]).controller('app.mainController', ['$scope', function ($scope) {
    $scope.persons = [
      {
        Name: 'Alexander Kahoun',
        Phone: '480-648-8086'
      },
      {
        Name: 'Amber Kahoun',
        Phone: '480-393-0778'
      }];
    $scope.person = {};
    $scope.$on('contact-selected', function (evt, data) {
      $scope.$broadcast('select-contact', data);
    })
  }]);
