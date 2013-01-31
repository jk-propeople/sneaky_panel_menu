(function(jQuery) {
    Drupal.behaviors.sneaky_panel = {};
    Drupal.behaviors.sneaky_panel.attach = function(context, settings) {
        if ( jQuery('.sneaky-wrapper .sneaky-custom-grid p > a div').length==0){
            jQuery('.sneaky-wrapper .sneaky-custom-grid p > a').not('a.ctools-dropdown-link').addClass('sneaky-custom-link').prepend('<span></span>');
        }
    }
})(jQuery);