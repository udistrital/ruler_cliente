'use strict';

describe('Controller: AgregardominioCtrl', function () {

  // load the controller's module
  beforeEach(module('rulerClientApp'));

  var AgregardominioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgregardominioCtrl = $controller('AgregardominioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AgregardominioCtrl.awesomeThings.length).toBe(3);
  });
});
