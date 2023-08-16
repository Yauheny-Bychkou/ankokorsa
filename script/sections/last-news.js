const initLastNewsAccordion = () => {
  const collectionOverlayItemsAccordion = document.querySelectorAll(".last-news__head-overlay");
  collectionOverlayItemsAccordion.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.classList.toggle("last-news__item--active");
    });
  });
};

if (document.querySelector(".last-news__list")) {
  initLastNewsAccordion();
}
