const initSwiperAchievements = () => {
  const swiperAchievements = new Swiper(".achievements__swiper", {
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

if (document.querySelector(".achievements__swiper")) {
  initSwiperAchievements();
}
