const mq = window.matchMedia("(max-width: 767px)");
mq.addEventListener("change", (e) => {
  if (e.matches) {
    location.reload();
  }
  if (!e.matches) {
    location.reload();
  }
});

window.addEventListener("load", () => {
  document.documentElement.style.setProperty(
    "--scrollbar-width",
    window.innerWidth - document.documentElement.clientWidth + "px"
  );
});

const initSelect = (selector) => {
  const wrapperSelect = document.querySelector(`.${selector}`);
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains(`${selector}-overlay`)) {
      wrapperSelect.classList.toggle(`${selector}--active`);
    } else {
      wrapperSelect.classList.remove(`${selector}--active`);
    }
  });
};

const initMobileMenu = () => {
  const body = document.querySelector("body");
  const header = document.querySelector(".header");
  const overlay = document.querySelector(".overlay");
  const burgerButton = document.querySelector(".burger");

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("header__burger-overlay")) {
      burgerButton.classList.toggle("burger_active");
      body.classList.toggle("body-overlay");
      overlay.classList.toggle("visible");
      header.classList.toggle("header--menu");
    } else if (e.target.classList.contains("overlay")) {
      burgerButton.classList.remove("burger_active");
      body.classList.remove("body-overlay");
      overlay.classList.remove("visible");
      header.classList.remove("header--menu");
    }
  });
};

if (document.querySelector(".header__burger")) {
  initMobileMenu();
}

if (document.querySelector(".header__localization")) {
  initSelect("header__localization");
}

if (document.querySelector(".header__phone")) {
  initSelect("header__phone");
}
