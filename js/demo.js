const container = document.querySelector(".services-panel");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const scrollAmount = 300; // adjust as needed

nextBtn.addEventListener("click", () => {
  container.scrollLeft += scrollAmount;
});

prevBtn.addEventListener("click", () => {
  container.scrollLeft -= scrollAmount;
});
