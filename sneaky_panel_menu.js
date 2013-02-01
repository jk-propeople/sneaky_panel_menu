(function($) {
    Drupal.behaviors.sneaky_panel_menu = {};
    Drupal.behaviors.sneaky_panel_menu.attach = function(context, settings) {
        if ($('.sneaky-wrapper .sneaky-custom-grid p > a div').length == 0) {
            $('.sneaky-wrapper .sneaky-custom-grid p > a').not('a.ctools-dropdown-link').addClass('sneaky-custom-link').prepend('<span></span>');
        }
        $('.sneaky-item a').hover(function() {
          $(this).next().show('fast');
        },
        function () {
          $(this).next().hide();
        });

        $('.sneaky-panel').hover(function() {
          $(this).show();
        },
        function() {
          $(this).hide();
        });
    }
})(jQuery);
