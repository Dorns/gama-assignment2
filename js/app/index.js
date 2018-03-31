(($) => {
  
  $(document).on('click', '.action-button', event => {
    
    $('html, body').animate({scrollTop: $('#form').offset().top - 20}, 'slow')

  });

})(jQuery);