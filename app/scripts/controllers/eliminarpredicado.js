'use strict';

/**
 * @ngdoc function
 * @name rulerClientApp.controller:EliminarpredicadoCtrl
 * @description
 * # EliminarpredicadoCtrl
 * Controller of the rulerClientApp
 */
angular.module('rulerClientApp')
  .controller('EliminarpredicadoCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams)  {
    $scope.id = $routeParams.Id;
    $scope.title = 'Predicados';
    $scope.message = 'Eliminar Predicados de Aplicación';

    $scope.load = function(id){
      $http.get(api_path + 'predicado/'+id)
      .then(function(response) {
          $scope.predicado = response.data;
      });
    };

    $http.get(api_path + 'dominio?limit=0')
    .then(function(response) {
        $scope.dominios = response.data;
    });

    $http.get(api_path + 'tipo_predicado/?limit=0')
    .then(function(response) {
        $scope.tipos = response.data;
    });

    $scope.delete = function(Id){
      $http.delete(api_path + 'predicado/'+Id)
      .then(function() {
          window.location.href = '#/listarPredicado';
      });
    };

    $scope.cancel = function(){
      window.location.href = '#/listarPredicado';
    };
  }]);
