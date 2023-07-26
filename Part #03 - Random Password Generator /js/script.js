let output = document.getElementById("output"),
  btnGenerator = document.querySelector(".generator"),
  btnCopy = document.querySelector(".copy");

let generatorPass = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!$%&/[]<>()=?@~`.';:+=^*_-0123456789";
  let passLenegth = 12;
  let pass = "";
  for (let i = 0; i < passLenegth; i++) {
    let random = Math.floor(Math.random() * chars.length);
    pass += chars.charAt(random);
  }
  return pass;
};

btnGenerator.addEventListener("click", () => {
  output.value = generatorPass();
});

btnCopy.addEventListener("click", () => {
  output.select();
  document.execCommand("copy");
  if (output.value !== "") {
    output.classList.add("copy");
    setTimeout(() => {
      output.classList.remove("copy");
    }, 800);
  } else {
    output.classList.add("error");
    setTimeout(() => {
      output.classList.remove("error");
    }, 800);
  }
});
