const imagen = document.getElementById("imagen");
const ant = document.getElementById("ant");
const sig = document.getElementById("sig");

let auto = 0; 
const cauto = () => {
 
  if(auto >= 0){
    auto = auto + 1;
    
  }
  if (auto == 1){
    imagen2.src = "Imagenes/Desarrollo.png"
  }
  if(auto == 2){
    imagen2.src = "Imagenes/Imaginacion.png"
  }
  if(auto == 3){
    auto = 0;
    imagen2.src = "Imagenes/LeoJM.png"
  }
}

setInterval(cauto, 3000);


let cambio = 0; 
const csig = () => {
 
  if(cambio >= 0){
    cambio = cambio + 1;
    
  }
  if (cambio == 1){
    imagen.src = "Imagenes/Desarrollo.png"
  }
  if(cambio == 2){
    imagen.src = "Imagenes/Imaginacion.png"
  }
  if(cambio == 3){
    cambio = 0;
    imagen.src = "Imagenes/LeoJM.png"
  }
}
const cant = () => {
  if(cambio <= 3){
    cambio = cambio - 1;
    
  }
  if(cambio == 0){
    imagen.src = "Imagenes/LeoJM.png"
  }
  if (cambio == 1){
    imagen.src = "Imagenes/Desarrollo.png"
  }
 
  if(cambio < 0){
    cambio = 2;
    imagen.src = "Imagenes/Imaginacion.png"
  }
  
}
sig.addEventListener("click", () => {
  
  csig();
})
ant.addEventListener("click", () => {
  
  cant();
})
particlesJS(
    {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 1100
            }
          },
          "color": {
            "value": "#02aaaa"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 3,
              "color": "#02aaaa"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.24,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
)
