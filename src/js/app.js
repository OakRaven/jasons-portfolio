var portfolioApp = {};

(function(){
  'use strict';

  portfolioApp = angular.module('portfolioApp', [])
    .config(function($routeProvider){
      $routeProvider.when('/home', {
        templateUrl: 'templates/home.html'
      });

      $routeProvider.when('/about', {
        templateUrl: 'templates/about-me.html'
      });

      $routeProvider.otherwise({
        redirectTo: '/home'
      });
    });

})();