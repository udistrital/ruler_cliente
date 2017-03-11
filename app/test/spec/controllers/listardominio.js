'use strict';

describe('Controller: ListardominioCtrl', function () {

  // load the controller's module
  beforeEach(module('rulerClientApp'));

  var ListardominioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListardominioCtrl = $controller('ListardominioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListardominioCtrl.awesomeThings.length).toBe(3);
  });
});
