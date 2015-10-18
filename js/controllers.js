var appControllers = angular.module('appControllers', []);
  
appControllers.controller('MainCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);