'use strict';

describe('Controller: EliminarpredicadoCtrl', function () {

  // load the controller's module
  beforeEach(module('rulerClientApp'));

  var EliminarpredicadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EliminarpredicadoCtrl = $controller('EliminarpredicadoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EliminarpredicadoCtrl.awesomeThings.length).toBe(3);
  });
});
