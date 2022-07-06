/**
 * @file
 * JavaScript for Colorbox Load.
 */

(function ($) {
  "use strict";
  Drupal.AjaxCommands.prototype.featherlightLoadOpen = function (
    ajax,
    response
  ) {
    $.featherlight(
      "featherbox",
      $.extend(
        {},
        {
          contentFilters: "html",
          html: response.data,
          afterOpen: function () {
            var $instance = this["$instance"];
            $instance.addClass("ng-feather");
          },
          afterContent: function () {
            var $instance = this["$instance"];

            if (typeof ajax.dialog.classname != "undefined") {
              $instance.addClass(ajax.dialog.classname);
            }
          },
        }
      )
    );
    Drupal.attachBehaviors();
  };
})(jQuery);
