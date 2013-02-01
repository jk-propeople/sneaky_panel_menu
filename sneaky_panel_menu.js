(function(jQuery) {
    Drupal.behaviors.sneaky_panel_menu = {};
    Drupal.behaviors.sneaky_panel_menu.attach = function(context, settings) {
        if (jQuery('.sneaky-wrapper .sneaky-custom-grid p > a div').length == 0) {
            jQuery('.sneaky-wrapper .sneaky-custom-grid p > a').not('a.ctools-dropdown-link').addClass('sneaky-custom-link').prepend('<span></span>');
        }
        jQuery('.sneaky-item a').hover(function() {
          jQuery(this).next().show('fast');
        },
        function () {
          jQuery(this).next().show();
        });

        jQuery('.sneaky-panel').hover(function() {
          jQuery(this).show();
        },
        function() {
          jQuery(this).hide();
        }
    }
})(jQuery);
