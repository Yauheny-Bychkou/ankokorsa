window.addEventListener("load", () => {
  document.documentElement.style.setProperty(
    "--scrollbar-width",
    window.innerWidth - document.documentElement.clientWidth + "px"
  );
});

const initCheckBoxAgree = () => {
  const collectionInputCheckbox = document.querySelectorAll(".modal__agree input");
  collectionInputCheckbox.forEach((input) => {
    input.checked = false;
    input.addEventListener("change", (e) => {
      if (e.target.checked) {
        e.target.parentNode.classList.add("modal__agree--active");
      } else if (!e.target.checked) {
        e.target.parentNode.classList.remove("modal__agree--active");
      }
    });
  });
};

const initShowModal = () => {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("button-modal")) {
      showModal(e.target.dataset.modal);
    } else if (e.target.classList.contains("overlay-modal") || e.target.classList.contains("modal__close-overlay")) {
      closeAllModal();
    } else if (e.target.classList.contains("modal__button--calculation")) {
      e.preventDefault();
      closeAllModal();
      showModal("success");
    }
  });
};

const showModal = (selectorModal) => {
  const modal = document.querySelector(`.modal--${selectorModal}`);
  const modalOverlay = document.querySelector(".overlay-modal");
  const body = document.querySelector("body");

  body.classList.add("body-overlay");
  modal.classList.remove("hidden");
  modalOverlay.classList.remove("hidden");
};

const closeAllModal = () => {
  const collectionModal = document.querySelectorAll(".modal");
  const modalOverlay = document.querySelector(".overlay-modal");
  const body = document.querySelector("body");

  body.classList.remove("body-overlay");
  modalOverlay.classList.add("hidden");
  collectionModal.forEach((modal) => {
    modal.classList.add("hidden");
  });
};

if (document.querySelector(".modal__agree")) {
  initCheckBoxAgree();
}

if (document.querySelector(".button-modal")) {
  initShowModal();
}
