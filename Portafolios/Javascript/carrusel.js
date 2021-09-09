
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

