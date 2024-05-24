var timer = 60;
var score = 0;
var hitrn = 0;

function Incresescoreval() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
function makeBubble() {
  var clutter = "";

  for (let i = 0; i <= 89; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}

function hitval() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeval").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector(".pbtm").innerHTML = "<h1>Game Over</h1>";
    }
  }, 1000);
}

document.querySelector(".pbtm").addEventListener("click", function (e) {
  var clickNum = Number(e.target.textContent);
  if (clickNum === hitrn) {
    Incresescoreval();
    hitval();
    makeBubble();
  }
});

runTimer();
makeBubble();
hitval();
// Incresescoreval();
