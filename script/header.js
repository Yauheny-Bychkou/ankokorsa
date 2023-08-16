const mq = window.matchMedia("(max-width: 767px)");
mq.addEventListener("change", (e) => {
  if (e.matches) {
    location.reload();
  }
  if (!e.matches) {
    location.reload();
  }
});
