"use strict";
document.addEventListener("DOMContentLoaded", init);
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#overlay");
let closed = true;
function init() {
  (() => {
    hamburger.addEventListener("click", () => {
      if (closed) {
        hamburger.classList.add("open");
        menu.classList.add("menu");
        document.querySelector("html").classList.add("hidden");
      } else if (!closed) {
        hamburger.classList.remove("open");
        menu.classList.remove("menu");
        document.querySelector("html").classList.remove("hidden");
      }
      closed = !closed;
      console.log("bur");
    });
  })();
  document.querySelector("#overlay").addEventListener("click", () => {
    console.log("link");
    document.querySelector("html").classList.add("scroll");
    menu.classList.remove("menu");
    hamburger.classList.remove("open");
  });
}
