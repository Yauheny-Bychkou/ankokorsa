const initSwiperOurPartners = () => {
  const swiperOurPartners = new Swiper(".our-partners__swiper", {
    slidesPerView: "auto",
    
    breakpoints: {
      768: {
        freeMode: true,
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
