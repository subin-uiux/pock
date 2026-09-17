/**
 * guide.js
 * 가이드 페이지의 현재 뷰포트 구간 표시
 */
(function ($, window) {
  "use strict";

  var labels = {
    mobile: "Mobile · ~1023",
    tablet: "Tablet · 1024–1919",
    desktop: "Desktop · 1920+"
  };

  function render() {
    var name = window.POCK && window.POCK.breakpoint ? window.POCK.breakpoint() : "mobile";
    $(".guide__badge").text(labels[name] || labels.mobile);
  }

  $(function () {
    render();
    $(window).on("resize.guide", render);
  });
})(jQuery, window);
