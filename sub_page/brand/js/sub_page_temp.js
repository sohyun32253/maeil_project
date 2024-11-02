$(document).ready(function () {
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
        $(".side_menu h3").css({"background":"#194e91", "color":"#fff","transition-duration":"1.5s"});
    }
    else{
        $(".side_menu h3").css({"background":"#fff", "color":"#000", "box-shadow":"#e2e2e2 3px 1px 10px 0"});   
    }
    })

    $('#search_icon').on('click', function(event) {
        // event.preventDefault();
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
let open_check1 = 0;
let open_check2 = 0;

$(".sel_depth1").addClass("depth1");

$(".side_menu li").hover(function(event){
    event.stopPropagation();

    if(!$(this).hasClass("opened")){
        $(this).addClass("depth1")
    }
}, function(){
    if($(this).hasClass("sel_depth1")){
        $(this).addClass("depth1")
    }
    else{
        $(this).removeClass("depth1")
    }

});

$(".li_wrap1").on("click", function(event){
    event.stopPropagation();
    event.preventDefault();

    // $(this).removeClass("depth1");
    $(this).toggleClass("depth1");
    $(".li_wrap2").removeClass("opened");
    open_check2 = 0;

    if(open_check1 == 0){
        $(this).addClass("opened");
        $(".side_menu01_open").slideDown(200);
        open_check1 = 1;
    } else{
        $(this).removeClass("opened");
        /* $(".maeil_introduce").slideUp(200, function(){
            $(".li_wrap1").addClass("depth1");
        }); */
        $(".side_menu01_open").hide();
        open_check1 = 0;
    }

    $(this).find("a").eq(0).toggleClass("active");
    $(".side_menu02_open").slideUp(200);
    $(".li_wrap2").find("a").removeClass("active");

    var img1=$(this).find(".side_menu01");
    var img2=$(".li_wrap2").find(".side_menu02");

    if(img1.attr("src")==="/images/down_arrow.png"){
        img1.attr("src", "/images/up_arrow.png");
    }else{
        img1.attr("src","/images/down_arrow.png")
    }
    img2.attr("src","/images/down_arrow.png")
});

$(".li_wrap2").on("click", function(event){
    event.stopPropagation();
    event.preventDefault();

    // $(this).removeClass("depth1");
    $(this).toggleClass("depth1");
    $(".li_wrap1").removeClass("opened");
    open_check1 = 0;

    if(open_check2 == 0){
        $(this).addClass("opened");
        $(".side_menu02_open").slideDown(200);
        open_check2 = 1;
    } else{
        $(this).removeClass("opened");
        /* $(".maeil_map").slideUp(200, function(){
            $(".li_wrap2").addClass("depth1");
        }); */
        $(".side_menu02_open").hide();
        open_check2 = 0;
    }
    
    $(this).find("a").eq(0).toggleClass("active");
    $(".side_menu01_open").slideUp(200);
    $(".li_wrap1").find("a").removeClass("active");

    var img1=$(this).find(".side_menu02");
    var img2=$(".li_wrap1").find(".side_menu01")

    if(img1.attr("src")==="/images/down_arrow.png"){
        img1.attr("src", "/images/up_arrow.png");
    }else{
        img1.attr("src","/images/down_arrow.png")
    }
    img2.attr("src", "/images/down_arrow.png")
    });

  /* footer */
$(".family_site_option li").on("click", function (event) {
    event.stopPropagation(); 
    $(".family_site_option li").removeClass("active01");
    $(this).addClass("active01"); 
});
$(".family_site h3").on("click", function (event) {
    event.stopPropagation(); 
    event.preventDefault(); 
    $(".family_site ul").slideToggle(200); 
    $(".family_site").toggleClass("active01"); 
});
$(document).on("click", function () {
    if ($(".family_site").hasClass("active01")) {
        $(".family_site ul").slideUp(200);
        $(".family_site").removeClass("active01");
    }
});
});
