const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }
    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

const initAnimateFacts = () => {
  const factsSection = document.querySelector(".about-statistic__block");
  let count = 0;

  const observer = new IntersectionObserver(
    (enties) => {
      enties.forEach((entry) => {
        if (entry.isIntersecting && count === 0) {
          startAnimateFacts();
          count++;
        }
      });
    },
    {
      threshold: 0.7,
    }
  );
  observer.observe(factsSection);
};

const startAnimateFacts = () => {
  const collectionCountFacts = document.querySelectorAll(".about-statistic__item-hidden .about-statistic__item-value");
  collectionCountFacts.forEach((item) => {
    const valueFact = +item.textContent;
    animate({
      duration: 1000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        item.innerHTML = Math.floor(progress * valueFact);
      },
    });
  });
};

if (document.querySelector(".about-statistic__block")) {
  initAnimateFacts();
}
