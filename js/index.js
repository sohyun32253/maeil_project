$(document).ready(function () {
  /* header */
  $(".gnb ul").hover(
    function () {
      $(".gnb div, .nav_bg").stop().slideDown();
    },
    function () {
      $(".gnb div, .nav_bg").stop().slideUp();
    }
  );

  $('#search_icon').on('click', function(event) {
    event.preventDefault();
    var $searchBar = $('#search_bar');
    var $searchInput = $searchBar.find('input');
    if ($searchBar.hasClass('hidden')) {
        $searchBar.removeClass('hidden').addClass('active');
        setTimeout(function() {
            $searchInput.focus();
        }, 0);
    } else {
        $searchInput.val(''); 
        $searchInput.focus(); 
    }
});

$('#search_bar').find('a').on('click', function(event) {
    event.preventDefault();
    var $searchInput = $('#search_bar').find('input');
    $searchInput.val(''); 
    $searchInput.focus();
});

$(document).on('click', function(event) {
    var $searchBar = $('#search_bar');
    var $searchInput = $searchBar.find('input');
    var $searchIcon = $('#search_icon');

    if (!$searchBar.is(event.target) && !$searchIcon.is(event.target) && $searchBar.has(event.target).length === 0 && $searchIcon.has(event.target).length === 0) {
        $searchBar.removeClass('active').addClass('hidden');
        $searchInput.blur();
        $searchInput.val('');
    }
});

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
  $(".not_ready").on("click", function(){
    alert("준비중입니다.")
  })

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

      if (clickCount === 2) {
        clickCount = 0; // 3번 클릭 후 초기화
      }

      let position = -1224 * clickCount;
      $(".product_wrap ul").stop().animate({ left: position });
    });

    $(".pager .before a").click(function () {
      // .next a가 한 번이라도 클릭되었을 때만 동작
      if (!nextClicked) {
        return;
      }

      clickCount--;

      if (clickCount < 0) {
        clickCount = 1; // 마지막 화면으로 이동하기 위해 clickCount를 2로 설정
      }

      let position = -1224 * clickCount;
      $(".product_wrap ul").stop().animate({ left: position });
    });
  });

  /* instagram */
  $(function () {
    let clickCount = 0;
    let nextClicked = false;

    // .next a 클릭 시 nextClicked 변수를 true로 설정
    $(".insta_next").click(function () {
      nextClicked = true;
      clickCount++;

      if (clickCount === 2) {
        clickCount = 0; // 3번 클릭 후 초기화
      }

      let position = -1220 * clickCount;
      $(".instagram ul").stop().animate({ left: position });
    });

    $(".insta_prev").click(function () {
      // .next a가 한 번이라도 클릭되었을 때만 동작
      if (!nextClicked) {
        return;
      }

      clickCount--;

      if (clickCount < 0) {
        clickCount = 1; // 마지막 화면으로 이동하기 위해 clickCount를 2로 설정
      }

      let position = -1220 * clickCount;
      $(".instagram ul").stop().animate({ left: position });
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
