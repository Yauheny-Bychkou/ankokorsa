const initSwiperServices = () => {
  const swiperServices = new Swiper(".main-services__swiper", {
    slidesPerView: "auto",
    freeMode: true,
    navigation: {
      nextEl: '.main-services__services-button--next',
      prevEl: '.main-services__services-button--prev',
      disabledClass: 'main-services__services-button--disabled',
    },
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

if (document.querySelector(".main-services__swiper")) {
  initSwiperServices();
}
