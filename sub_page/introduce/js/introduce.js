$(document).ready(function(){
    $(".pause_button").on("click",function(){
        $(this).hide();
        $(".play_button").show();
        $("video").get(0).pause();
    })
    $(".play_button").on("click",function(){
        $(this).hide();
        $(".pause_button").show();
        $("video").get(0).play();
    })
    $(".sound_on").on("click",function(){
        $(this).hide();
        $(".sound_off").show();
        $("video").prop("muted", true);
    })
    $(".sound_off").on("click",function(){
        $(this).hide();
        $(".sound_on").show();
        $("video").prop("muted", false);
    })
    $(".subtitle").on("click",function(){
        $(".subtitle_modal").show().draggable({containment: "window"});
    })
    $(".subtitle_modal_close").on("click",function(){
        $(".subtitle_modal").hide();
    })
})