$(document).ready(function () {
  $(function () {
    $(".pager .before a").click(function () {
      $(".product_wrap ul").animate({ left: 0 });
    });
  });

  $(function () {
    $(".pager .next a").click(function () {
      $(".product_wrap ul").animate({ left: -1224 });
    });
  });
});
