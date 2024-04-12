const open = document.getElementById("open");
const close = document.getElementById("close");
const contain = document.querySelector(".contain");

open.addEventListener("click", () => contain.classList.add("show-nav"));
close.addEventListener("click", () => contain.classList.remove("show-nav"));
