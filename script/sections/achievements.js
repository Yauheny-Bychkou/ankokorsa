const initSwiperAchievements = () => {
  const swiperAchievements = new Swiper(".achievements__swiper", {
    
    freeMode: true,
    breakpoints: {
      1250: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
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

if (document.querySelector(".achievements__swiper")) {
  initSwiperAchievements();
}
