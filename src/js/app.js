var portfolioApp = {};

(function(){
  'use strict';

  portfolioApp = angular.module('portfolioApp', [])
    .config(function($routeProvider){
      $routeProvider.when('/home', {
        templateUrl: 'templates/home.html'
      });

      $routeProvider.when('/about', {
        templateUrl: 'templates/about-me/biography.html'
      });

      $routeProvider.when('/about/biography', {
        templateUrl: 'templates/about-me/biography.html'
      });

      $routeProvider.when('/about/letter', {
        templateUrl: 'templates/about-me/letter.html'
      });

      $routeProvider.when('/about/resume', {
        templateUrl: 'templates/about-me/resume.html'
      });

      $routeProvider.when('/about/contact', {
        templateUrl: 'templates/about-me/contact.html'
      });

      $routeProvider.when('/accomplishments', {
        templateUrl: 'templates/accomplishments/awards.html'
      });

      $routeProvider.when('/accomplishments/awards', {
        templateUrl: 'templates/accomplishments/awards.html'
      });

      $routeProvider.when('/my-work', {
        templateUrl: 'templates/my-work/design.html'
      });

      $routeProvider.when('/my-work/design', {
        templateUrl: 'templates/my-work/design.html'
      });

      $routeProvider.when('/my-work/sketching', {
        templateUrl: 'templates/my-work/sketching.html'
      });

      $routeProvider.when('/my-work/animation', {
        templateUrl: 'templates/my-work/animation.html'
      });

      $routeProvider.when('/my-work/video-production', {
        templateUrl: 'templates/my-work/video-production.html'
      });

      $routeProvider.otherwise({
        redirectTo: '/home'
      });
    });

})();