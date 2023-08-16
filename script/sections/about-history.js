const initSwiperHistory = () => {
  const swiperYears = new Swiper(".about-history__years", {
    slidesPerView: "auto",
    freeMode: true,
    breakpoints: {
      768: {
        spaceBetween: 38,
      },
      320: {
        spaceBetween: 24,
      },
    },
  });

  const swiperHistory = new Swiper(".about-history__swiper", {
    spaceBetween: 24,
  });

  const collectionOverlayYearsSlider = document.querySelectorAll(".about-history__years-overlay");

  swiperHistory.on("slideChange", () => {
    changeActiveYear(swiperHistory.realIndex);
  });

  collectionOverlayYearsSlider.forEach((item, idx) => {
    item.addEventListener("click", () => {
      changeActiveYear(idx);
      swiperHistory.slideTo(idx);
    });
  });

  const changeActiveYear = (activeIdx) => {
    const collectionYears = document.querySelectorAll(".about-history__years-slide");
    collectionYears.forEach((item, idx) => {
      if (idx === activeIdx) {
        item.classList.add("about-history__years-slide--active");
      } else {
        item.classList.remove("about-history__years-slide--active");
      }
    });
  };
};
if (document.querySelector(".about-history__years")) {
  initSwiperHistory();
}
