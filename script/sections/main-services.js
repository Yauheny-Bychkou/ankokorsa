const initSwiperAchievements = () => {
  const swiperAchievements = new Swiper(".main-services__swiper", {
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

if (document.querySelector(".main-services__swiper")) {
  initSwiperAchievements();
}
