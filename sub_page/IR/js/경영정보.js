$(document).ready(function () {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 700) {
            $(".graph p,.graph div").slideDown(1000);
        }else{
            $(".graph p,.graph div").slideUp(1000);
        }
    });
});

