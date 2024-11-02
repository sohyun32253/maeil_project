$(document).ready(function() {
    $(".gnb ul").hover(
        function(){
        $(".gnb div, .nav_bg").stop().slideDown();
        },
        function(){
            $(".gnb div, .nav_bg").stop().slideUp();
        });
    });