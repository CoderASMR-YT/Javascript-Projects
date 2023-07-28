let qrImg = document.querySelector(".img-qr"),
  qrText = document.querySelector(".text-qr"),
  qrGenerator = document.querySelector(".btn-qr");

qrGenerator.addEventListener("click", () => {
  if (qrText.value.length > 0) {
    let URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    qrImg.src = URL;
    qrImg.classList.add("active");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 600);
  }
});
