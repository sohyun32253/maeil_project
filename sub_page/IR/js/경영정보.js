$(document).ready(function (){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 700) { // Adjust the scroll distance as needed
            $(".slide_up, .graph p").slideDown(1500); // 500 milliseconds
        } else {
            $(".slide_up, .graph p").slideUp(1000); // 500 milliseconds
        }
    });
});
