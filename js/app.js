/* global angular */
/* Created by PGenger on 9/20/2015. */

var mainApp = angular.app('mainApp', Function());

mainApp.module('mainMod', [
  'ngRoute',
  'phonecatControllers'
]);


mainApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'MainCtrl'
      }).
      when('/phones/about', {
        templateUrl: 'partials/about.html',
        controller: 'aboutCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);