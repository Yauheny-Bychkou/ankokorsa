const initAnimateAfterLoadPage = () => {
  window.onload = () => {
    const title = document.querySelector(".title-animate--start");
    animateTitle(title, []);
  };
};

const initAnimateTitleBeforeScroll = () => {
  const titleArray = [];
  const observer = new IntersectionObserver(
    (enties) => {
      enties.forEach((entry) => {
        if (entry.isIntersecting) {
          animateTitle(entry.target, titleArray);
        }
      });
    },
    {
      threshold: 0.7,
    }
  );
  const collectionTitle = document.querySelectorAll(".title");
  collectionTitle.forEach((title) => {
    observer.observe(title);
  });
};


const animateTitle =(title, titleArray)=>{
  if(!titleArray.includes(title)) {
    titleArray.push(title)
    const textTitle = title.dataset.title.split("");
      textTitle.forEach((letter, idx) => {
        const newSpan = document.createElement("span");
        newSpan.innerHTML = letter;
        newSpan.classList.add("letter", "letter--hidden");
        title.append(newSpan);
          setTimeout(() => {
            newSpan.classList.remove("letter--hidden");
          },  15 * idx);
      });
  } 
}

if (document.querySelector(".title")) {
  initAnimateTitleBeforeScroll();
}
if (document.querySelector(".title-animate--start")) {
  initAnimateAfterLoadPage();
}
