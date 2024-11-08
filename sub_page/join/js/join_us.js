function join_form_check() {
    const u_name = document.getElementById("u_name");
    const u_id = document.getElementById("u_id");
    const pwd = document.getElementById("pwd");
    const repwd = document.getElementById("repwd");
    const mobile = document.getElementById("mobile");
    const apply = document.getElementById("apply");

    if( u_name.value == "" ){
        alert("이름을 입력하세요.");
        u_name.focus();
        return false;
    }

    if( !u_id.value ){ 
        alert("아이디를 입력하세요.");
        u_id.focus();
        return false;
    }

    let id_len = u_id.value.length;
    if( id_len < 4 || id_len > 12 ){ 
        alert("아이디는 4~12글자만 입력할 수 있습니다.");
        u_id.focus();
        return false;
    }

    let idPattern = /^[a-z0-9]+$/; 
    if (!idPattern.test(u_id.value)) {
        alert("아이디는 영어 소문자와 숫자만 사용해야 합니다.");
        u_id.focus();
        return false;
    }

    let hasLetter = /[a-z]/.test(u_id.value); 
    let hasNumber = /[0-9]/.test(u_id.value); 
    if (!(hasLetter && hasNumber)) {
        alert("아이디는 영어 소문자와 숫자를 모두 포함해야 합니다.");
        u_id.focus();
        return false;
    }

    if( !pwd.value ){ 
        alert("비밀번호를 입력하세요.");
        pwd.focus();
        return false;
    }

    let pwd_len = pwd.value.length;
    if( pwd_len < 4 || pwd_len > 12 ){ 
        alert("비밀번호는 4~8글자만 입력할 수 있습니다.");
        pwd.focus();
        return false;
    }

    if( pwd.value != repwd.value ){ 
        alert("비밀번호를 확인해 주세요.");
        repwd.focus();
        return false;
    }

    const reg = /^[0-9]{10,11}$/g; 
    if (!reg.test(mobile.value)) {
      alert("전화번호는 숫자만 입력할 수 있습니다.");
      mobile.focus();
      return false;
    }

    if (!apply.checked) {
      alert("약관동의가 필요합니다.");
      apply.focus();
      return false;
    }
  }

  window.onload = function() {
    const existingIds = JSON.parse(localStorage.getItem("existingIds")) || [];
    localStorage.setItem("existingIds", JSON.stringify(existingIds));
        };

    function checkAndSaveId() {
        const inputId = document.getElementById("u_id").value;
        const existingIds = JSON.parse(localStorage.getItem("existingIds")) || [];
        const idPattern = /^[a-zA-Z0-9]{4,12}$/;
        if (!idPattern.test(inputId)) {
            alert("아이디는 영문, 숫자 조합으로 4~12글자여야 합니다.");
            return;
        }
        
        if (existingIds.includes(inputId)) {
            alert("이미 사용 중인 아이디입니다.");
        } else {
            existingIds.push(inputId);
            localStorage.setItem("existingIds", JSON.stringify(existingIds));
            alert("사용 가능한 아이디입니다.");
        }
    }

    var check_num_pwd = 0; 
    function change_view1() {
        const pwd = document.getElementById("pwd"); 
        const show_pwd = document.getElementById("show_pwd"); 

        if (check_num_pwd == 0) {
            pwd.setAttribute("type", "text");
            show_pwd.innerText = "비밀번호 감추기"; 
            check_num_pwd = 1; 
        } else {
            pwd.setAttribute("type", "password"); 
            show_pwd.innerText = "비밀번호 표시"; 
            check_num_pwd = 0; 
        }
    } 

    var check_num_repwd = 0; 
    function change_view2() {
        const repwd = document.getElementById("repwd"); 
        const re_pwd = document.getElementById("re_pwd"); 

        if (check_num_repwd == 0) {
            repwd.setAttribute("type", "text"); 
            re_pwd.innerText = "비밀번호 감추기"; 
            check_num_repwd = 1; // 상태 변경
        } else {
            repwd.setAttribute("type", "password"); 
            re_pwd.innerText = "비밀번호 표시"; 
            check_num_repwd = 0; 
        }
    }

  function change_email() {
    // alert("TEST");
    let email_dns = document.getElementById("email_dns");
    let email_sel = document.getElementById("email_sel");

    let idx = email_sel.options.selectedIndex;
    let selected = email_sel.options[idx].value;

    email_dns.value = selected;

    if (selected == "") {
      email_dns.readOnly = false;
      email_dns.focus();
    } else {
      email_dns.readOnly = true;
    }
  }
  
  function search_addr() {
          console.log("search_addr function called");
          new daum.Postcode({
            oncomplete: function(data) {
              var addr = ''; 
              var extraAddr = ''; 
             
              if (data.userSelectedType === 'R') { 
                  addr = data.roadAddress;
              } else { 
                  addr = data.jibunAddress;
              }
            
              if(data.userSelectedType === 'R'){
                  if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                      extraAddr += data.bname;
                  }
                 
                  if(data.buildingName !== '' && data.apartment === 'Y'){
                      extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                  }
                 
                  if(extraAddr !== ''){
                      extraAddr = ' (' + extraAddr + ')';
                  }
                  
                  document.getElementById("refer_addr").value = extraAddr;
              
              } else {
                  document.getElementById("refer_addr").value = '';
              }
              
              document.getElementById('postalcode').value = data.zonecode;
              document.getElementById("addr").value = addr;
              document.getElementById("detail_addr").focus();
              }
          }).open();
      }

      window.onload = function() {
          document.getElementById("search_addr").addEventListener("click", search_addr);
      };