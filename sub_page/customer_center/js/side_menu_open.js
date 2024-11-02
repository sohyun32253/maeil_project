$(document).ready(function () {
  let check_num0 = 1;

  $(".side_menu a").hover(
    function () {
      if (!$(this).hasClass("selected")) {
        $(this).addClass("gnb_hover");
      }
    },
    function () {
      $(this).removeClass("gnb_hover");
    }
  );

  $(".li_wrap1 > a").on("click", function () {
    var child = $(this).next("ul");
    $(".li_wrap2 > a").removeClass("selected");

    $(".side_menu ul ul").not(child).slideUp(200);
    child.slideToggle(200);
    $(".side_menu a").not($(this)).removeClass("active");
    $(this).toggleClass("active");

    if (check_num0 == 0) {
      $(this).addClass("selected");
      $(this).removeClass("gnb_hover");
      check_num0 = 1;
    } else {
      $(this).removeClass("selected");
      $(this).addClass("gnb_hover");
      check_num0 = 0;
    }

    var img1 = $(this).children("img");

    if (img1.attr("src") === "images/down_arrow.png") {
      img1.attr("src", "images/up_arrow.png");
    } else {
      img1.attr("src", "images/down_arrow.png");
    }
  });

  $(".li_wrap2 > a").on("click", function () {
    var child = $(this).next("ul");
    $(".li_wrap1 > a").removeClass("selected");

    $(".side_menu ul ul").not(child).slideUp(200);
    child.slideToggle(200);
    $(".side_menu a").not($(this)).removeClass("active");
    $(this).toggleClass("active");

    if (check_num0 == 0) {
      $(this).addClass("selected");
      $(this).removeClass("gnb_hover");
      check_num0 = 1;
    } else {
      $(this).removeClass("selected");
      $(this).addClass("gnb_hover");
      check_num0 = 0;
    }

    var img1 = $(this).children("img");

    if (img1.attr("src") === "images/down_arrow.png") {
      img1.attr("src", "images/up_arrow.png");
    } else {
      img1.attr("src", "images/down_arrow.png");
    }
  });
/* side menu scroll */
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 1) {
    $(".side_menu h3").css({"background":"#194e91", "color":"#fff","transition-duration":"1.5s"});
  }
  else{
    $(".side_menu h3").css({"background":"#fff", "color":"#000", "box-shadow":"#e2e2e2 3px 1px 10px 0"});   
  }
})

  /* footer */
  $(".family_site_option li").on("click", function (event) {
    event.stopPropagation();
    $(".family_site_option li").removeClass("active");
    $(this).addClass("active");
  });
  $(".family_site h3").on("click", function (event) {
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
