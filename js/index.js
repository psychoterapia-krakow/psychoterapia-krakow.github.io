(function () {
  'use strict';

  function init() {
    $('a[href*=\\#]').on('click', function(event){
      var href = $.attr(this, 'href');
      $('html,body').animate(
        {scrollTop: $(this.hash).offset().top},
        500, function() {
          window.location.hash = href;
        });
      event.preventDefault();
    });
  }
  window.onload =  init;
}());
