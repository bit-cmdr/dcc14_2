angular.module('app.directives.contact', [])
  .directive('contact', function(){
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        person: '='
      },
      templateUrl: 'javascripts/lib/templates/contact.html',
      link: function (scope, element, attrs) {
        element.click(function (evt) {
          scope.$emit('contact-selected', scope.person);
        });
      }
    };
  });
