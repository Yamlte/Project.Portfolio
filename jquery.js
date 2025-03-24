$(document).ready(function() {
    
    $('.popup-open').on('click', function() {
        $('.popup-fade').fadeIn();
        return false; 
    });

    
    $('.popup-close').on('click', function() {
        $(this).closest('.popup-fade').fadeOut();
        return false; 
    });

    
    $(document).on('keydown', function(e) {
        if (e.keyCode === 27) { 
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });

    $('.popup-fade').on('click', function(e) {
        if ($(e.target).closest('.popup').length === 0) {
            $(this).fadeOut();
        }
    });
});

$(document).ready(function() {
    setTimeout(function() {
      $('#preLoader').addClass('loaded');
      setTimeout(function() {
          $('#preLoader').css('visibility', 'hidden');
      }, 1000); 
    }, 3000);
  });