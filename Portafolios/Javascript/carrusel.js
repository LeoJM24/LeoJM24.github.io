
document.addEventListener("DOMContentLoaded", () => {
    const todosCarrusel = document.querySelectorAll(".carousel");
    M.Carousel.init( todosCarrusel, {
        duration: 200,
        indicators: true,
        dist: 0,
        shift: 39,
      numVisible: 7
    });

});
window.addEventListener('resize', () => {
  const ejecutarElementos = document.querySelectorAll(".carousel");
  M.Carousel.init(ejecutarElementos, {
    duration: 200,
    indicators: false,
    dist: 0,
    shift: 39,
  numVisible: 7
  })
});
