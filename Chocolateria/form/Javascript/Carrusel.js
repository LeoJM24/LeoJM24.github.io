document.addEventListener("DOMContentLoaded", () => {
    const ejecutarElementos = document.querySelectorAll(".carousel");
    M.Carousel.init(ejecutarElementos, {
        dist: -250,
        numVisible: 3,
        indicators: true
    })
})


window.addEventListener('resize', () => {
    const ejecutarElementos = document.querySelectorAll(".carousel");
    M.Carousel.init(ejecutarElementos, {
        dist: -250,
        numVisible: 3,
        indicators: true
    })
});