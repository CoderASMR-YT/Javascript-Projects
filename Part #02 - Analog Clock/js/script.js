let clock = document.querySelector(".clock"),
  hr = document.querySelector(".hr"),
  min = document.querySelector(".min"),
  sec = document.querySelector(".sec");

let num = () => {
  for (let i = 0; i < 12; i++) {
    let numClock = document.createElement("div");
    numClock.classList.add("num");
    clock.appendChild(numClock);
    numClock.innerText = `${i + 1}`;

    numClock.style = `transform: rotate(calc(${i + 1} * (360deg / 12)))`;
  }
};

const updateTime = () => {
  const deg = 6;
  let date = new Date();
  let hh = date.getHours() * 30;
  let mm = date.getMinutes() * deg;
  let ss = date.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
};
setInterval(updateTime, 1000);
updateTime();
num();
