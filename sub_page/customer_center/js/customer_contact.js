$(document).ready(function() {
    function validateName() {
        var nameInput = $("#name").val();
        var nameMessage = $("#nameMessage");
        if (nameInput.trim() === "") {
            nameMessage.text("성명을 입력하세요.");
            return false;
        } else {
            nameMessage.text("");
            return true;
        }
    }

    function validateTel() {
        var telInput = $("#tel").val();
        var telMessage = $("#telMessage");
        if (telInput.trim() === "") {
            telMessage.text("연락처를 입력하세요.");
            return false;
        } else {
            telMessage.text("");
            return true;
        }
    }

    function validateEmail() {
        var emailId = $("#email_id").val();
        var emailDns = $("#email_dns").val();
        var emailMessage = $("#emailMessage");
        if (emailId.trim() === "" || emailDns.trim() === "") {
            emailMessage.text("이메일을 입력하세요.");
            return false;
        } else {
            emailMessage.text("");
            return true;
        }
    }

    function validateTitle() {
        var titleInput = $("#title").val();
        var titleMessage = $("#titleMessage");
        if (titleInput.trim() === "") {
            titleMessage.text("제목을 입력하세요.");
            return false;
        } else {
            titleMessage.text("");
            return true;
        }
    }

    function validateContent() {
        var contentInput = $("#content").val();
        var contentMessage = $("#contentMessage");
        if (contentInput.trim() === "") {
            contentMessage.text("내용을 입력하세요.");
            return false;
        } else {
            contentMessage.text("");
            return true;
        }
    }

    function validatePassword() {
        var password = $("#password").val();
        var confirmPassword = $("#confirm_password").val();
        var passwordMessage = $("#passwordMessage");
        var confirmPasswordMessage = $("#confirmPasswordMessage");
        if (password.trim() === "") {
            passwordMessage.text("비밀번호를 입력하세요.");
            return false;
        } else if (password !== confirmPassword) {
            confirmPasswordMessage.text("비밀번호가 일치하지 않습니다.");
            return false;
        } else {
            passwordMessage.text("");
            confirmPasswordMessage.text("");
            return true;
        }
    }

    function validateTerms() {
        var termsAgree = $("#agree").is(":checked");
        var termsMessage = $("#termsMessage");
        if (!termsAgree) {
            termsMessage.text("개인정보 처리방침에 동의해 주세요.");
            return false;
        } else {
            termsMessage.text("");
            return true;
        }
    }

    window.validateForm = function(event) {
        var isValid = validateName() & validateTel() & validateEmail() & validateTitle() & validateContent() & validatePassword() & validateTerms();
        if (!isValid) {
            event.preventDefault();
        }
    };

    $("#name").on("blur", validateName);
    $("#tel").on("blur", validateTel);
    $("#email_id, #email_dns").on("blur", validateEmail);
    $("#title").on("blur", validateTitle);
    $("#content").on("blur", validateContent);
    $("#password, #confirm_password").on("blur", validatePassword);
    $("input[name='terms']").on("change", validateTerms);
});