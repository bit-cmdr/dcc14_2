angular.module('app.contactService', [])
  .service('contactService', ['$rootScope', function ($rootScope) {
    var service = {
      contacts: [
      {
        Name: 'Alexander Kahoun',
        Phone: '480-555-5551'
      },
      {
        Name: 'Amber Kahoun',
        Phone: '480-555-5552'
      }],
      addContact: function (contact) {
        service.contacts.push(contact);
        $rootScope.$broadcast('contacts.update');
      }
    };

    return service;
  }]);
