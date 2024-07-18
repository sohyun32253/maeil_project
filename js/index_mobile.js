$(document).ready(function () {
  /* header */
  $(".all_menu").hover(
    function () {
      $(".gnb div, .nav_bg").stop().slideDown();
    },
    function () {
      $(".gnb div, .nav_bg").stop().slideUp();
    }
  );

  /* main content */
  var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Play/Pause Button
  var playPauseButton = $("#playPauseButton");
  var isPlaying = true;

  playPauseButton.on("click", function () {
    if (isPlaying) {
      swiper.autoplay.stop();
      playPauseButton.attr("src", "images/pause.png");
    } else {
      swiper.autoplay.start();
      playPauseButton.attr("src", "images/play.png");
    }
    isPlaying = !isPlaying;
  });

  /* gallery */
  $(function () {
    let clickCount = 0;
    let nextClicked = false;

    // .next a 클릭 시 nextClicked 변수를 true로 설정
    $(".pager .next a").click(function () {
      nextClicked = true;
      clickCount++;

      if (clickCount === 4) {
        clickCount = 0; // 3번 클릭 후 초기화
      }

      let position = -645 * clickCount;
      $(".product_wrap ul").animate({ left: position });
    });

    $(".pager .before a").click(function () {
      // .next a가 한 번이라도 클릭되었을 때만 동작
      if (!nextClicked) {
        return;
      }

      clickCount--;

      if (clickCount < 0) {
        clickCount = 3; // 마지막 화면으로 이동하기 위해 clickCount를 2로 설정
      }

      let position = -645 * clickCount;
      $(".product_wrap ul").animate({ left: position });
    });
  });

  /* instagram */
  $(function () {
    $(".instagram .insta_prev").click(function () {
      $(".instagram ul").animate({ left: 0 });
    });
  });

  $(function () {
    $(".instagram .insta_next").click(function () {
      $(".instagram ul").animate({ left: -714 });
    });
  });

  /* main bottom & footer */
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
