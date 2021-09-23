
document.addEventListener("DOMContentLoaded", () => {
    const todosCarrusel = document.querySelectorAll(".carousel");
    M.Carousel.init( todosCarrusel, {
        duration: 200,
        indicators: true,
        dist: -50,
        shift: 39,
      numVisible: 3
    });

});
window.addEventListener('resize', () => {
  const ejecutarElementos = document.querySelectorAll(".carousel");
  M.Carousel.init(ejecutarElementos, {
    duration: 200,
    indicators: false,
    dist: -50,
    shift: 39,
  numVisible: 3
  })
});
