const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

let load = 0;

let num = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(num);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(num, inMin, inMax, outMin, outMax) {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
