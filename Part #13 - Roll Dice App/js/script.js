const diceImg = document.querySelectorAll("img"),
  dice1 = document.getElementById("dice-1"),
  dice2 = document.getElementById("dice-2"),
  btn = document.querySelector(".btn");

const images = [
  "./assets/media/dice-1.png",
  "./assets/media/dice-2.png",
  "./assets/media/dice-3.png",
  "./assets/media/dice-4.png",
  "./assets/media/dice-5.png",
  "./assets/media/dice-6.png",
];

let randomRoll = () => {
  let diceOneValue = Math.floor(Math.random() * 6);
  let diceTwoValue = Math.floor(Math.random() * 6);
  dice1.src = images[diceOneValue];
  dice2.src = images[diceTwoValue];
};

let rollDice = () => {
  diceImg.forEach((dice) => {
    dice.classList.add("shake");
  });
  setTimeout(() => {
    diceImg.forEach((dice) => {
      dice.classList.remove("shake");
    });
    randomRoll();
  }, 800);
};

rollDice();
btn.addEventListener("click", rollDice);
