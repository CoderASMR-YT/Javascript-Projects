const btnToggle = document.querySelector(".btn-menu"),
  menu = document.querySelectorAll(".container-menu a");

btnToggle.addEventListener("click", () => {
  if (!btnToggle.classList.contains("active")) {
    btnToggle.classList.add("active");
    menu[0].style.transform = "translate(2.8em,0)";
    menu[1].style.transform = "translate(2em,2em)";
    menu[2].style.transform = "translate(0,3em)";
    menu[3].style.transform = "translate(-2em,2em)";
    menu[4].style.transform = "translate(-2.8em,0)";
    menu[5].style.transform = "translate(-2em,-2em)";
    menu[6].style.transform = "translate(0,-3em)";
    menu[7].style.transform = "translate(2em,-2em)";
  } else {
    menu.forEach((item) => {
      item.style.transform = "translate(0,0)";
    });
    btnToggle.classList.remove("active");
  }
});
