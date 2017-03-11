'use strict';

describe('Controller: EliminardominioCtrl', function () {

  // load the controller's module
  beforeEach(module('rulerClientApp'));

  var EliminardominioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EliminardominioCtrl = $controller('EliminardominioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EliminardominioCtrl.awesomeThings.length).toBe(3);
  });
});
