'use strict';

/**
 * @ngdoc overview
 * @name profileMaterialApp
 * @description
 * # profileMaterialApp
 *
 * Main module of the application.
 */
var app = angular.module('profileMaterialApp', [ 'ngMaterial','ngRoute']);

app.config(function ($routeProvider) {
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
      .otherwise({
        redirectTo: '/'
      });
});
app.controller('profileCtrl',['$scope','$mdSidenav',function($scope,$mdSidenav,$mdBottomSheet){
    $scope.toggleLeft = function(){
        $mdSidenav('left').toggle();
    };
}]);
