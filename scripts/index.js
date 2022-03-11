const accordions = document.querySelectorAll(".accordion-item");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
  });
});
