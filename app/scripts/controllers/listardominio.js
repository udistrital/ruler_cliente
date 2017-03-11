'use strict';

/**
 * @ngdoc function
 * @name rulerClientApp.controller:ListardominioCtrl
 * @description
 * # ListardominioCtrl
 * Controller of the rulerClientApp
 */
angular.module('rulerClientApp')
  .controller('ListardominioCtrl', function ($scope, $http) {

    //Variable de template que permite la edición de las filas de acuerdo a la condición ng-if
  //var tmpl = '<div ng-if="!row.entity.editable">{{COL_FIELD}}</div><div ng-if="row.entity.editable"><input ng-model="MODEL_COL_FIELD"</div>';

    //Creación tabla
     $scope.gridOptions1 = {
        enableSorting: true,
        enableFiltering: true,
        resizable: true,
        columnDefs: [
          //{ field: 'Id',  enableCellEdit: false},
          { field: 'Nombre', displayName: 'Nombre'  },
          { field: 'Descripcion', displayName: 'Descripción' },

          { field: 'Acciones', displayName: 'Acciones',
          cellTemplate: '<button type="button" class="btn btn-success btn-circle" ng-click="grid.appScope.editar(row)"><i class="glyphicon glyphicon-pencil"></i></button>&nbsp;<button class="btn btn-danger btn-circle" ng-click="grid.appScope.eliminar(row)"><i class="glyphicon glyphicon-trash"></i></button>'}
          ]
        };



    $http.get(api_path + 'dominio?limit=0')
    .then(function(response) {
        $scope.gridOptions1.data = response.data;
        //$scope.myData = response.data;
    });

    $scope.editar = function(row){
      //alert(row.entity.Id);
      window.location.href = '#/editarDominio/' + row.entity.Id;
    }

    $scope.eliminar = function(row){
      //alert(row.entity.Id);
      window.location.href = '#/eliminarDominio/' + row.entity.Id;
    }
  });
