'use strict';

describe('Controller: EditarpredicadoCtrl', function () {

  // load the controller's module
  beforeEach(module('rulerClientApp'));

  var EditarpredicadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarpredicadoCtrl = $controller('EditarpredicadoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditarpredicadoCtrl.awesomeThings.length).toBe(3);
  });
});
