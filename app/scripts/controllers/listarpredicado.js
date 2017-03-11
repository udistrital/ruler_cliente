'use strict';

/**
 * @ngdoc function
 * @name rulerClientApp.controller:ListarpredicadoCtrl
 * @description
 * # ListarpredicadoCtrl
 * Controller of the rulerClientApp
 */
angular.module('rulerClientApp')
  .controller('ListarpredicadoCtrl', function ($scope, $http) {
    //Creación tabla
     $scope.gridOptions1 = {
        enableSorting: true,
        enableFiltering: true,
        resizable: true,
        columnDefs: [
          //{ field: 'Id',  enableCellEdit: false},
          { field: 'Nombre', displayName: 'Nombre'  },
          { field: 'Descripcion', displayName: 'Descripción' },
          { field: 'Dominio.Nombre', displayName: 'Dominio'  },
          { field: 'TipoPredicado.Nombre', displayName: 'Tipo'  },
          { field: 'Acciones', displayName: 'Acciones',
          cellTemplate: '<button type="button" class="btn btn-success btn-circle" ng-click="grid.appScope.editar(row)"><i class="glyphicon glyphicon-pencil"></i></button>&nbsp;<button class="btn btn-danger btn-circle" ng-click="grid.appScope.eliminar(row)"><i class="glyphicon glyphicon-trash"></i></button>'}
          ]
        };


    $http.get(api_path + 'predicado?limit=0')
    .then(function(response) {
        //$scope.data = response.data;
        //$scope.myData = response.data;

        $scope.gridOptions1.data = response.data;
    });

    $scope.editar = function(row){
      //alert(row.entity.Id);
      window.location.href = '#/editarPredicado/' + row.entity.Id;
    }

    $scope.eliminar = function(row){
      //alert(row.entity.Id);
      window.location.href = '#/eliminarPredicado/' + row.entity.Id;
    }
  });
