const botones = document.querySelectorAll("#line1 input")
const arriba = document.getElementById("arriba");
const mostrar = document.getElementById("mostrar");
const recuadro = document.getElementById("ContactOcultar");
const cerrar = document.getElementById("cerrar");
particlesJS(
    {
        "particles": {
          "number": {
            "value": 30,
            "density": {
              "enable": true,
              "value_area": 1100
            }
          },
          "color": {
            "value": "#c010a1"
          },
          "shape": {
            "type": "edge",
            "stroke": {
              "width": 3,
              "color": "#f521f5"
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
              "mode": "remove"
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

const ejecutar = (I) => {
  switch(I.target.className){
    case "btn1":
      location.href = " https://github.com/LeoJM24/LeoJM24.github.io/tree/master/Magicarf"
      
    break
    case "btn2":
      location.href = "https://leojm24.github.io/Magicarf/ "
      
    break
    case "btn3":
      location.href = " https://github.com/LeoJM24/LeoJM24.github.io/tree/master/Chocolateria"
      
    break
    case "btn4":
      location.href = "https://leojm24.github.io/Chocolateria/ " 
      
    break
    case "btn5":
      location.href = " https://github.com/LeoJM24/LeoJM24.github.io/tree/master/HLeoJM"
    break
    case "btn6":
      location.href = "https://leojm24.github.io/HLeoJM/ "
    break
    case "btn7":
      location.href = "https://github.com/LeoJM24/LeoJM24.github.io/tree/master/Bilion "
    break
    case "btn8":
      location.href = "https://leojm24.github.io/Bilion/ "
     
    break
  }
}

botones.forEach((I) => {
  I.addEventListener("click", ejecutar)
})

window.onscroll = () => {
  let irarriba = window.scrollY;
  if(irarriba >= 300){
    arriba.className ="arriba";
  }
  else{
    arriba.className ="ocultar";
  }
};
mostrar.addEventListener("click", () => {
  
if(recuadro.className == "Contactoocultar"){
  recuadro.className = "contactodiv"
  
}
else{
  recuadro.className = "Contactoocultar"
}
})
cerrar.addEventListener("click", () => {
  if(recuadro.className == "Contactoocultar"){
    recuadro.className = "Contactoocultar contactodiv"
    
  }
  else{
    recuadro.className = "Contactoocultar"
  }
})