const red = document.getElementById("red"),
  yellow = document.getElementById("yellow"),
  blue = document.getElementById("blue"),
  productImg = document.getElementById("image"),
  btnBuy = document.querySelector(".btn-buy");

red.addEventListener("click", () => {
  productImg.setAttribute("src", "../assets/media/shoes1.jpg");
  btnBuy.style.backgroundColor = "#ab2932";
});
yellow.addEventListener("click", () => {
  productImg.setAttribute("src", "../assets/media/shoes2.jpg");
  btnBuy.style.backgroundColor = "#eabb4f";
});
blue.addEventListener("click", () => {
  productImg.setAttribute("src", "../assets/media/shoes3.jpg");
  btnBuy.style.backgroundColor = "#48c3c1";
});
