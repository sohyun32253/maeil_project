$(document).ready(function () {
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
          /* $(".side_menu01_open").slideUp(200, function(){
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

      if(img1.attr("src")==="images/down_arrow.png"){
          img1.attr("src", "images/up_arrow.png");
      }else{
          img1.attr("src","images/down_arrow.png")
      }
      img2.attr("src","images/down_arrow.png")
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

      if(img1.attr("src")==="images/down_arrow.png"){
          img1.attr("src", "images/up_arrow.png");
      }else{
          img1.attr("src","images/down_arrow.png")
      }
      img2.attr("src", "images/down_arrow.png")
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
