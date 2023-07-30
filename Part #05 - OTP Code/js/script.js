const inputNum = document.querySelectorAll("input"),
  btnVerify = document.querySelector(".btn-verify");

inputNum.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input,
      nextInput = input.nextElementSibling;

    if (
      nextInput !== null &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (!inputNum[3].disabled && inputNum[3].value !== "") {
      btnVerify.classList.add("active");
    } else {
      btnVerify.classList.remove("active");
    }
    if (e.key == "Backspace") {
      if (input.previousElementSibling != null) {
        e.target.value = "";
        e.target.setAttribute("disabled", true);
        input.previousElementSibling.focus();
      }
    }
  });
});

window.addEventListener("load", () => inputNum[0].focus());
