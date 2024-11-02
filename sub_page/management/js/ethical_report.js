// Validate password
function validatePassword() {
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");
    var pwMessage = document.getElementById("pwMessage");
    if (password.value !== confirm_password.value) {
        pwMessage.textContent = "비밀번호가 일치하지 않습니다.";
        return false;
    } else {
        pwMessage.textContent = "";
        return true;
    }
}

// Validate tel
function validateTel() {
    var telInput = document.getElementById("tel");
    var telMessage = document.getElementById("telMessage");
    var telRegex = /^[0-9]+$/;
    if (!telRegex.test(telInput.value)) {
        telMessage.textContent = "숫자만 입력할 수 있습니다.";
        return false;
    } else {
        telMessage.textContent = "";
        return true;
    }
}

// Change email domain
function change_email() {
    let email_dns = document.getElementById("email_dns");
    let email_sel = document.getElementById("email_sel");
    let idx = email_sel.options.selectedIndex;
    let selected = email_sel.options[idx].value;

    email_dns.value = selected;
    email_dns.readOnly = selected !== "";
    if (selected === "") {
        email_dns.focus();
    }
}

// Form validation on submit
function validateForm(event) {
    if (!validatePassword() || !validateTel()) {
        event.preventDefault();
    }
}

// Attach event listeners
document.getElementById("password").addEventListener("input", validatePassword);
document.getElementById("confirm_password").addEventListener("input", validatePassword);
document.getElementById("tel").addEventListener("input", validateTel);
document.querySelector("form[name='report']").addEventListener("submit", validateForm);