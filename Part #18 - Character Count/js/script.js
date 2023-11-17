const textArea = document.querySelector(".textarea"),
  counterResult = document.querySelector(".counter");

textArea.addEventListener("input", () => {
  let count = textArea.value.length;
  counterResult.textContent = "Character Count : " + count;
});