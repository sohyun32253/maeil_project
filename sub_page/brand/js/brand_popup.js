$(document).ready(function() {

$(".milk>li").on("click",function(){
    var index = $(this).index()+1;
    $(".modal_background"+index).fadeIn();
});
$(".yogurt>li").on("click",function(){
    var index = $(this).index()+1;
    $(".modal_background_for_yogurt"+index).fadeIn();
});
$(".cheese>li").on("click",function(){
    var index = $(this).index()+1;
    $(".modal_background_for_cheese"+index).fadeIn();
});

$(".popup_close img").on("click",function(){
    $(this).closest(".modal_background").fadeOut();
});


$(".milk_popup1_wrap>dl>dd").hover(function(){
    $(this).find(".popup_name, .modal_more").show()
},
function(){
    $(this).find(".popup_name, .modal_more").hide()
})


})