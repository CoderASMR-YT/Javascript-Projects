const coverMusic = document.querySelector(".img-music img"),
  title = document.querySelector(".details h1"),
  artist = document.querySelector(".details p"),
  musicProgress = document.querySelector(".music-progress"),
  progress = document.querySelector(".progress"),
  currentTimeEl = document.querySelector(".current-time"),
  durationEl = document.querySelector(".duration"),
  prevBtn = document.getElementById("prev"),
  playBtn = document.getElementById("play"),
  nextBtn = document.getElementById("next"),
  background = document.querySelector("body");

const musicAudio = new Audio();

let musicIndex = 0;

let playMusic = () => {
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  coverMusic.style = "animation-play-state: running;";
  musicAudio.play();
};

let pauseMusic = () => {
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  coverMusic.style = "animation-play-state: paused;";
  musicAudio.pause();
};

let loadMusic = (song) => {
  title.innerText = song.name;
  artist.innerText = song.artist;
  coverMusic.src = song.img;
  musicAudio.src = song.src;
  background.style = `background:url("${song.img}"); background-size: cover;`;
};

let prevMusic = () => {
  musicIndex = (musicIndex - 1 + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
};

let nextMusic = () => {
  musicIndex = (musicIndex + 1) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
};

let updateTime = () => {
  const { duration, currentTime } = musicAudio;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const formatTime = (time) => String(Math.floor(time)).padStart(2, "0");
  durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(
    duration % 60
  )}`;
  currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(
    currentTime % 60
  )}`;
};

let setProgress = (e) => {
  const width = musicProgress.clientWidth;
  const clickX = e.offsetX;
  musicAudio.currentTime = (clickX / width) * musicAudio.duration;
};

playBtn.addEventListener("click", () => {
  const isMusicPlay = playBtn.classList.contains("fa-pause");
  isMusicPlay ? pauseMusic() : playMusic();
});
prevBtn.addEventListener("click", () => prevMusic());
nextBtn.addEventListener("click", () => nextMusic());
musicAudio.addEventListener("timeupdate", updateTime);
musicProgress.addEventListener("click", setProgress);
loadMusic(songs[musicIndex]);
