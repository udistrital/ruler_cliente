'use strict';

describe('Controller: EditardominioCtrl', function () {

  // load the controller's module
  beforeEach(module('rulerClientApp'));

  var EditardominioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditardominioCtrl = $controller('EditardominioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditardominioCtrl.awesomeThings.length).toBe(3);
  });
});
