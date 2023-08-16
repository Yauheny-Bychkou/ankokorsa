const initAccordionTransition = () => {
  const collectionOverlayItemAccordion = document.querySelectorAll(".transportation__block-overlay");
  collectionOverlayItemAccordion.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.classList.toggle("transportation__block-item--active");
    });
  });
};

if (document.querySelector(".transportation__block-list")) {
  initAccordionTransition();
}
