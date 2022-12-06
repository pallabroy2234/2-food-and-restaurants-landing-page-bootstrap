// Navbar Design
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("on-scroll");
  } else {
    nav.classList.remove("on-scroll");
  }
};
// Navbar hide

let navBar = document.querySelectorAll(".nav-link");

let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach((e) => {
  e.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

// Counter Section

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(range / duration)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 1287, 3000);
  counter("count2", 100, 5786, 2500);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 7110, 3000);
});
