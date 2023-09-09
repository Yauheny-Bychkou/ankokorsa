const initSwiperAchievements = () => {
  const swiperAchievements = new Swiper(".achievements__swiper", {
    
    
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
        freeMode: true,
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
