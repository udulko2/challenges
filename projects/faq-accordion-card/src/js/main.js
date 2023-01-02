jQuery(document).ready(function ($) {
  $("#accordion").accordionjs({
    closeAble: false,
    closeOther: false,
    slideSpeed: 150,
    activeIndex: false,
    openSection: function (section) { },
    beforeOpenSection: function (section) { },
  });
});