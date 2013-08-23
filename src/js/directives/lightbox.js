(function(){
  'use strict';

  portfolioApp.directive('lightbox', function($timeout){
    return {
      restrict: 'A',
      link: function(scope, element, attrs, controller){
        console.log('executing lightbox');

        var lightBoxConfig = {
          fixedNavigation: false,
          imageLoading:  'img/lightbox-ico-loading.gif',
          imageBtnClose: 'img/lightbox-btn-close.gif',
          imageBtnPrev:  'img/lightbox-btn-prev.gif',
          imageBtnNext:  'img/lightbox-btn-next.gif',
          imageBlank:    'img/lightbox-blank.gif'
        };

        $timeout(function(){
          $('div.gallery a').lightBox(lightBoxConfig);
        }, 0);
      }
    };
  });
})();