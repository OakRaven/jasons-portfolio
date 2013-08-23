(function(){
  'use strict';

  portfolioApp.controller('SketchingController',
    function SketchingController($scope){
      $scope.sketches = [
        {
          id: 1,
          title: 'Amazing Spiderman'
        },
        {
          id: 2,
          title: 'Lucky Franco'
        },
        {
          id: 3,
          title: 'Buffy the Vampire Slayer character.'
        },
        {
          id: 4,
          title: 'Silent Hill Nurse'
        },
        {
          id: 5,
          title: 'Evil Angel'
        }
      ];
    }
  );

})();