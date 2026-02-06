function go(current, next) {
  document.getElementById(current).classList.remove("show");
  document.getElementById(next).classList.add("show");
}

function reveal() {
  document.getElementById("finalImg").classList.remove("hidden");
  document.getElementById("wish").classList.remove("hidden");
  go("s11", "s12");
}

function showVideo() {
  document.getElementById("videoBox").classList.remove("hidden");
}

let playing = false;
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (!playing) {
    music.play();
  } else {
    music.pause();
  }
  playing = !playing;
}


