$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      $(".side_menu h3").css({"background":"#194e91", "color":"#fff","transition-duration":"0.7s"});
    }
    else{
      $(".side_menu h3").css({"background":"#fff", "color":"#000", "box-shadow":"#e2e2e2 3px 1px 10px 0"});   
    }
  })



$(document).ready(function() {
    $(".gnb ul").hover(
        function() {
            $(".gnb div, .nav_bg").stop().slideDown();
        },
        function() {
            $(".gnb div, .nav_bg").stop().slideUp();
        }
    );

    /* search bar */ /* 추가! */

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
            $searchBar.removeClass('active').addClass('hidden');
            $searchInput.blur();
        }
    });

    $(document).on('click', function(event) {
        var $searchBar = $('#search_bar');
        var $searchInput = $searchBar.find('input');
        var $searchIcon = $('#search_icon');
        
        if (!$searchBar.is(event.target) && !$searchIcon.is(event.target) && !$searchBar.has(event.target).length && !$searchIcon.has(event.target).length) {
            $searchBar.removeClass('active').addClass('hidden');
            $searchInput.blur();
        }
    });
});


        