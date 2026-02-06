let current = 1;

function nextSection() {
  document.getElementById("sec" + current).classList.remove("active");
  current++;
  document.getElementById("sec" + current).classList.add("active");
}

function revealFinal() {
  document.getElementById("finalImg").classList.remove("hidden");
  document.getElementById("finalText").classList.remove("hidden");
  nextSection();
}

function showVideo() {
  document.getElementById("videoBox").classList.remove("hidden");
}

