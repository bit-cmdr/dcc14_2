angular.module('app.directives.contact', [])
  .directive('contactCard', function(){
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        contact: '='
      },
      templateUrl: 'javascripts/lib/directives/contact/contact.html',
      link: function (scope, element, attrs) {
        element.click(function (evt) {
          scope.$emit('contact.selected', scope.contact);
        });
      }
    };
  });
