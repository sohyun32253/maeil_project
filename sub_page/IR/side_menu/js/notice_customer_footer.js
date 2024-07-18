$(document).ready(function () {
  $(".family_site_option li").on("click", function (event) {
    event.stopPropagation();
    $(".family_site_option li").removeClass("active");
    $(this).addClass("active");
  });
  $(".family_site ").on("click", function (event) {
    event.stopPropagation();
    event.preventDefault();
    $(".family_site ul").slideToggle(200);
    $(".family_site").toggleClass("active");
  });
  $(document).on("click", function () {
    if ($(".family_site").hasClass("active")) {
      $(".family_site ul").slideUp(200);
      $(".family_site").removeClass("active");
    }
  });
});
