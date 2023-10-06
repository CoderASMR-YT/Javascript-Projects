const tabHeader = document.querySelector(".tab-header"),
  tabTitle = document.querySelectorAll(".tab-title"),
  tabIndicator = document.querySelector(".tab-indicator"),
  contentBox = document.querySelector(".content-box"),
  text = document.querySelectorAll(".text");

for (let i = 0; i < tabTitle.length; i++) {
  tabTitle[i].addEventListener("click", () => {
    tabHeader.querySelector(".active").classList.remove("active");
    tabTitle[i].classList.add("active");
    contentBox.querySelector(".active").classList.remove("active");
    text[i].classList.add("active");
    tabIndicator.style.left = `calc( 6.6em * ${i})`;
  });
}
