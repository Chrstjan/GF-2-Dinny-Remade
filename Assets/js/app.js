const hamburgerBtn = document.getElementById("hamburger");
const burgerContent = document.querySelectorAll(".main-list li");

hamburgerBtn.addEventListener("click", () => {
  burgerContent.forEach((li) => {
    li.classList.toggle("burger-content");
  });
});
