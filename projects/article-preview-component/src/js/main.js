$(function () {
  var instance = $('.tooltip').tooltipster({
    animation: 'grow',
    contentCloning: true,
    // delay: 100,
    distance: 20,
    interactive: true,
    theme: ['tooltipster-borderless', 'tooltip-customized'],
    trigger: 'custom',
    //side: 'left',

    functionReady: function (instance, helper) {
      var $origin = $(helper.origin);
      $origin.addClass('tooltip-active');
    },

    functionAfter: function (instance, helper) {
      var $origin = $(helper.origin);
      $origin.removeClass('tooltip-active');
    }
  }).tooltipster('instance');

  const ttcc = $("#tooltip_content");

  $('.tooltip').on('click', function () {
    const ww = $(window).width();
    const enabled = instance.status().enabled;

    if (ww >= 1000) {
      $(".share-options-content").removeClass('share-active');
      $(".tooltip").removeClass('share-active');
      if (!enabled) {
        instance.enable();
      }
      const hasTooltipActive = $(".tooltip").hasClass("tooltip-active");
      if (hasTooltipActive) {
        instance.close();
      } else {
        instance.open();
      }
    }
    else {
      if (enabled) {
        instance.disable();
      }
      ttcc.appendTo(".share-options-content");
      $(".share-options-content").toggleClass('share-active');
      $(".tooltip").toggleClass('share-active');
    }
  });
});