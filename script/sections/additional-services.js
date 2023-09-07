const initSwiperAdditionServices = () => {
  const swiperAdditionServices = new Swiper(".additional-services__swiper", {
    
    freeMode: true,
    breakpoints: {
      1250: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 16,
      },
      320: {
        slidesPerView: "auto",
        spaceBetween: 16,
      },
    },
  });
};
if (document.querySelector(".additional-services__swiper")) {
  initSwiperAdditionServices();
}
