'use strict';

/**
 * @ngdoc function
 * @name rulerClientApp.controller:EliminardominioCtrl
 * @description
 * # EliminardominioCtrl
 * Controller of the rulerClientApp
 */
angular.module('rulerClientApp')
  .controller('EliminardominioCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams)  {
    $scope.Id = $routeParams.Id;
    $scope.title = 'Dominios';
    $scope.message = 'Eliminar Dominio de Aplicación';

    $scope.load = function(Id){
      $http.get(api_path + 'dominio/'+Id)
      .then(function(response) {
          $scope.domain = response.data;
      });
    };

    $scope.delete = function(Id){
      $http.delete(api_path + 'dominio/'+Id)
      .then(function() {
          window.location.href = '#/listarDominio';
      });
    };

    $scope.cancel = function(){
      window.location.href = '#/listarDominio';
    };
  }]);
