'use strict';

describe('Controller: ListarpredicadoCtrl', function () {

  // load the controller's module
  beforeEach(module('rulerClientApp'));

  var ListarpredicadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListarpredicadoCtrl = $controller('ListarpredicadoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListarpredicadoCtrl.awesomeThings.length).toBe(3);
  });
});
