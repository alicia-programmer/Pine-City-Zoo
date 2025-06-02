// Toggle menu icon and X (Open navbar)
let changeIcon = function (icon) {
  document.querySelector(".nav_content").classList.toggle("show");
  icon.classList.toggle("bx-x");
};

// Animal Picture Slider
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});

// Map open and close
window.onclick = function () {
  function openMap() {
    document.getElementById("map").style.width = "100%";
  }
  function closeMap() {
    document.getElementById("map").style.width = "0";
  }
};
