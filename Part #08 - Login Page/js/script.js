const close = document.querySelector(".close"),
  open = document.querySelector(".open"),
  eyeWrapper = document.querySelector(".eye-wrapper"),
  password = document.querySelector(".password");

let showHide = () => {
  if (password.type == "password") {
    password.setAttribute("type", "text");
    open.style.display = "block";
    close.style.display = "none";
  } else {
    password.setAttribute("type", "password");
    close.style.display = "block";
    open.style.display = "none";
  }
};
eyeWrapper.addEventListener("click", showHide);
