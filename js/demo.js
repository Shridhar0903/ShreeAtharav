const track = document.getElementById("track");
const carousel = document.getElementById("carousel");

let isDragging = false;
let startX;
let currentRotation = 0;
let velocity = 0;

/* AUTO ROTATION */
function autoRotate() {
  if (!isDragging) {
    currentRotation += 0.05;
    track.style.transform = `rotateY(${currentRotation}deg)`;
  }
  requestAnimationFrame(autoRotate);
}
autoRotate();

/* MOUSE DOWN */
carousel.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  carousel.style.cursor = "grabbing";
});

/* MOUSE MOVE */
window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let delta = e.clientX - startX;
  velocity = delta * 0.3;

  currentRotation += velocity;
  track.style.transform = `rotateY(${currentRotation}deg)`;

  startX = e.clientX;
});

/* MOUSE UP */
window.addEventListener("mouseup", () => {
  isDragging = false;
  carousel.style.cursor = "grab";
});

/* TOUCH SUPPORT */
carousel.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
});

window.addEventListener("touchmove", (e) => {
  if (!isDragging) return;

  let delta = e.touches[0].clientX - startX;
  velocity = delta * 0.3;

  currentRotation += velocity;
  track.style.transform = `rotateY(${currentRotation}deg)`;

  startX = e.touches[0].clientX;
});

window.addEventListener("touchend", () => {
  isDragging = false;
});
