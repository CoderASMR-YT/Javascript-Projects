const timerText = document.querySelector(".timer"),
  btnStart = document.querySelector(".btn-start"),
  btnStop = document.querySelector(".btn-stop"),
  btnReset = document.querySelector(".btn-reset");

let timer,
  hours = 0,
  minutes = 0,
  seconds = 0;

let updateTimer = () => {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  timerText.innerText = formatTime(hours, minutes, seconds);
};

let formatTime = () => {
  return (
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds)
  );
};

let startTimer = () => {
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
};

let stopTimer = () => {
  clearInterval(timer);
};

let resetTimer = () => {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  timerText.innerText = formatTime(hours, minutes, seconds);
};

btnStart.addEventListener("click", () => startTimer());
btnStop.addEventListener("click", () => stopTimer());
btnReset.addEventListener("click", () => resetTimer());
