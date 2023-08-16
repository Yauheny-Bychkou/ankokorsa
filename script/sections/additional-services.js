const initSwiperAdditionServices = () => {
  const swiperAdditionServices = new Swiper(".additional-services__swiper", {
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
if (document.querySelector(".additional-services__swiper")) {
  initSwiperAdditionServices();
}
