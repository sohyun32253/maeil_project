$(document).ready(function () {
  $("li").on("click", function (event) {
    event.stopPropagation();
    $("li").removeClass("active");
    $(this).addClass("active");
  });
  $(".li_wrap1").on("click", function (event) {
    event.stopPropagation();
    event.preventDefault();
    $(".financial_info").slideToggle(200);
    $(this).toggleClass("active");
    $(".official_noctice").slideUp(200);
    $(".li_wrap2").removeClass("active");
  });

  $(".li_wrap2").on("click", function (event) {
    event.stopPropagation();
    event.preventDefault();
    $(".official_noctice").slideToggle(200);
    $(this).toggleClass("active");
    $(".financial_info").slideUp(200);
    $(".li_wrap1").removeClass("active");
  });
});
