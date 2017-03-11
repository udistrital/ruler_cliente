'use strict';

/**
 * @ngdoc function
 * @name rulerClientApp.controller:EditardominioCtrl
 * @description
 * # EditardominioCtrl
 * Controller of the rulerClientApp
 */
angular.module('rulerClientApp')
  .controller('EditardominioCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.id = $routeParams.Id;
    $scope.title = 'Dominios';
    $scope.message = 'Editar Dominios de Aplicación';

    $scope.load = function(id){
    $http.get(api_path + 'dominio/'+id)
    .then(function(response) {
        $scope.domain = response.data;
    });
  };

  $scope.save = function(){
    if($scope.domain.Nombre == null){
      return;
    }
    if($scope.domain.Descripcion == null){
      return;
    }
    var data = {
        Id: $scope.domain.Id,
        Nombre: $scope.domain.Nombre,
        Descripcion: $scope.domain.Descripcion
    };
    $http.put(api_path + 'dominio/'+$scope.domain.Id,data).then(function(){
      window.location.href = '#/listarDominio';
    });

  };

  $scope.cancel = function(){
    window.location.href = '#/listarDominio';
  };


  }]);
