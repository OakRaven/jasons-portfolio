var portfolioApp = {};

(function(){
  'use strict';

  portfolioApp = angular.module('portfolioApp', [])
    .config(function($routeProvider){
      $routeProvider.when('/home', {
        templateUrl: 'templates/home.html'
      });

      $routeProvider.when('/about', {
        templateUrl: 'templates/about-me/short-biography.html'
      });

      $routeProvider.when('/about/biography', {
        templateUrl: 'templates/about-me/short-biography.html'
      });

      $routeProvider.when('/about/letter', {
        templateUrl: 'templates/about-me/cover-letter.html'
      });

      $routeProvider.otherwise({
        redirectTo: '/home'
      });
    });

})();