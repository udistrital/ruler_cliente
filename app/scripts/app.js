'use strict';

/**
 * @ngdoc overview
 * @name rulerClientApp
 * @description
 * # rulerClientApp
 *
 * Main module of the application.
 */

var api_path = 'http://127.0.0.1:8080/v1/';

angular
  .module('rulerClientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'afOAuth2',
    'treeControl',
    'ngMaterial',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.rowEdit',
    'ui.grid.cellNav',
    'ui.grid.treeView',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ngStorage'
  ])
    .config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("");
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/listarDominio', {
        templateUrl: 'views/listardominio.html',
        controller: 'ListardominioCtrl',
        controllerAs: 'listarDominio'
      })
      .when('/agregarDominio', {
        templateUrl: 'views/agregardominio.html',
        controller: 'AgregardominioCtrl',
        controllerAs: 'agregarDominio'
      })
      .when('/editarDominio', {
        templateUrl: 'views/editardominio.html',
        controller: 'EditardominioCtrl',
        controllerAs: 'editarDominio'
      })
      .when('/editarDominio/:Id', {
        templateUrl: 'views/editardominio.html',
        controller: 'EditardominioCtrl',
        controllerAs: 'editarDominio'
      })
      .when('/eliminarDominio', {
        templateUrl: 'views/eliminardominio.html',
        controller: 'EliminardominioCtrl',
        controllerAs: 'eliminarDominio'
      })
      .when('/eliminarDominio/:Id', {
        templateUrl: 'views/eliminardominio.html',
        controller: 'EliminardominioCtrl',
        controllerAs: 'eliminarDominio'
      })
      .when('/listarPredicado', {
        templateUrl: 'views/listarpredicado.html',
        controller: 'ListarpredicadoCtrl',
        controllerAs: 'listarPredicado'
      })
      .when('/agregarPredicado', {
        templateUrl: 'views/agregarpredicado.html',
        controller: 'AgregarpredicadoCtrl',
        controllerAs: 'agregarPredicado'
      })
      .when('/editarPredicado/:Id', {
        templateUrl: 'views/editarpredicado.html',
        controller: 'EditarpredicadoCtrl',
        controllerAs: 'editarPredicado'
      })
      .when('/eliminarPredicado/:Id', {
        templateUrl: 'views/eliminarpredicado.html',
        controller: 'EliminarpredicadoCtrl',
        controllerAs: 'eliminarPredicado'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
