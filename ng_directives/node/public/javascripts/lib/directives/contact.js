angular.module('app.directives.contact', [])
  .directive('contact', function(){
    return {
      restrict: 'EA',
      scope: {
        person: '='
      },
      replace: true,
      templateUrl: 'javascripts/lib/templates/contact.html',
      link: function (scope, element, attrs) {
        element.click(function (evt) {
          console.log(scope.person);
        });
      },
      controller: function($scope){
        $scope.$watch('person.Name', function (newVal, oldVal) {
          console.log('new:', newVal);
          console.log('old:', oldVal);
        });
      }
    };
  });
