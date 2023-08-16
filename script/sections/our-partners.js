const initSwiperOurPartners = () => {
  const swiperOurPartners = new Swiper(".our-partners__swiper", {
    slidesPerView: "auto",
    freeMode: true,
    breakpoints: {
      768: {
        spaceBetween: 20,
      },
      320: {
        spaceBetween: 16,
      },
    },
  });
};

if (document.querySelector(".our-partners__swiper")) {
  initSwiperOurPartners();
}
