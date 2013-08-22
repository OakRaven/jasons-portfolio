(function(){
  'use strict';

  portfolioApp.controller('SketchingController',
    function SketchingController($scope){
      $scope.sketches = [
        {
          id: 1,
          thumbnail: 'http://placekitten.com/200/150',
          fullsize:  'http://placekitten.com/800/600',
          title:     'Silent Hill Nurse',
          description: 'Awesome picture!'
        },
        {
          id: 2,
          thumbnail: 'http://placekitten.com/200/150',
          fullsize:  'http://placekitten.com/800/600',
          title:     'Silent Hill Nurse',
          description: 'Awesome picture!'
        },
        {
          id: 3,
          thumbnail: 'http://placekitten.com/200/150',
          fullsize:  'http://placekitten.com/800/600',
          title:     'Silent Hill Nurse',
          description: 'Awesome picture!'
        },
        {
          id: 4,
          thumbnail: 'http://placekitten.com/200/150',
          fullsize:  'http://placekitten.com/800/600',
          title:     'Silent Hill Nurse',
          description: 'Awesome picture!'
        },
        {
          id: 5,
          thumbnail: 'http://placekitten.com/200/150',
          fullsize:  'http://placekitten.com/800/600',
          title:     'Silent Hill Nurse',
          description: 'Awesome picture!'
        }
      ];

      $scope.configureLightbox = function(){
      //  $.light
      };
    }
  );

})();