$(document).ready(function(){
    $("#user_id").focus();
    $("button").on("click",function(){
        if( $("#user_id").val()=="" && $("#user_pw").val()=="" ){
            alert("로그인 정보를 입력하세요.")
        }else if($("#user_id").val()==""){
            alert("아이디를 입력하세요.")
        }else if($("#user_pw").val()==""){
            alert("비밀번호를 입력하세요.")
        }
    })
});