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
    } else if (e.target.classList.contains("modal__button--submit")) {
      e.preventDefault();
      closeAllModal();
      showModal("error");
    }
  });
};

const showModal = (selectorModal) => {
  const modal = document.querySelector(`.modal--${selectorModal}`);
  const modalOverlay = document.querySelector(".overlay-modal");
  const body = document.querySelector("body");

  body.classList.add("body-overlay");
  modal.classList.add("modal--visible");
  modalOverlay.classList.remove("hidden");
};

const closeAllModal = () => {
  const collectionModal = document.querySelectorAll(".modal");
  const modalOverlay = document.querySelector(".overlay-modal");
  const body = document.querySelector("body");

  body.classList.remove("body-overlay");
  modalOverlay.classList.add("hidden");
  collectionModal.forEach((modal) => {
    modal.classList.remove("modal--visible");
  });
};

const initSelectModal = () => {
  const select = document.querySelector(".modal__select");
  const valueSelect = document.querySelector(".modal__select input");
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal__select-overlay")) {
      select.classList.toggle("modal__select--active");
    } else if (e.target.classList.contains("modal__select-item")) {
      valueSelect.value = e.target.textContent;
      select.classList.remove("modal__select--active");
    } else {
      select.classList.remove("modal__select--active");
    }
  });
};

if (document.querySelector(".modal__select")) {
  initSelectModal();
}
if (document.querySelector(".modal__agree")) {
  initCheckBoxAgree();
}

if (document.querySelector(".button-modal")) {
  initShowModal();
}
