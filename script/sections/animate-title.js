const initAnimateAfterLoadPage = () => {
  window.onload = () => {
    const title = document.querySelector(".title-animate--start");
    const textTitle = title.textContent.split("");

    title.innerHTML = "";
    textTitle.forEach((letter, idx) => {
      const newSpan = document.createElement("span");

      newSpan.innerHTML = letter;
      newSpan.classList.add("letter", "letter--hidden");
      title.append(newSpan);
      setTimeout(() => {
        newSpan.classList.remove("letter--hidden");
      }, 100 * idx);
    });
  };
};

if (document.querySelector(".title-animate--start")) {
  initAnimateAfterLoadPage();
}
