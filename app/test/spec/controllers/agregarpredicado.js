'use strict';

describe('Controller: AgregarpredicadoCtrl', function () {

  // load the controller's module
  beforeEach(module('rulerClientApp'));

  var AgregarpredicadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgregarpredicadoCtrl = $controller('AgregarpredicadoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AgregarpredicadoCtrl.awesomeThings.length).toBe(3);
  });
});
