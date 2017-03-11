'use strict';

/**
 * @ngdoc function
 * @name rulerClientApp.controller:AgregardominioCtrl
 * @description
 * # AgregardominioCtrl
 * Controller of the rulerClientApp
 */
angular.module('rulerClientApp')
  .controller('AgregardominioCtrl', function ($scope, $http) {
    $scope.title = 'Dominios';
  $scope.message = 'Agregar Dominio de Aplicación';

  $scope.add = function(){
    if($scope.domain.name == null){
      return;
    }
    if($scope.domain.description == null){
      return;
    }
    var data = {
        Nombre: $scope.domain.name,
        Descripcion: $scope.domain.description
    };
    $http.post(api_path + 'dominio',data).then(function(){
      window.location.href = '#/listarDominio';
    });

  };

  $scope.cancel = function(){
    window.location.href = '#/listarDominio';
  };
  });
