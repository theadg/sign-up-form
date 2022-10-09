const pwdInput = document.querySelector("#pwd");
const confirmPwdInput = document.querySelector("#confirm-pwd");
const submitBtn = document.querySelector("#submit");
const pwdLabel = document.querySelector("#pwd-label");
const noPwdLabel = document.querySelector("#pwd-no-label");
const confirmNoPwdLabel = document.querySelector("#pwd-confirm-no-label");
submitBtn.onclick = () => {
  if (!pwdInput.value || !pwdInput) {
    pwdInput.classList.add("invalid");
    confirmPwdInput.classList.add("invalid");
    noPwdLabel.style.display = "block";
    confirmNoPwdLabel.style.display = "block";
  } else {
    if (pwdInput.value !== confirmPwdInput.value) {
      pwdInput.classList.add("invalid");
      confirmPwdInput.classList.add("invalid");
      pwdLabel.style.display = "block";
    } else {
      pwdInput.classList.remove("invalid");
      confirmPwdInput.classList.remove("invalid");
      pwdLabel.style.display = "none";
    }
  }
};
