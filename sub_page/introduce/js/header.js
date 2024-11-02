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
});
