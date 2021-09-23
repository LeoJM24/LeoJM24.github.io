(function (){
const botones = document.querySelectorAll("#line1 input")
const arriba = document.getElementById("arriba");
const mostrar = document.getElementById("mostrar");
const recuadro = document.getElementById("ContactOcultar");
const cerrar = document.getElementById("cerrar");
const resumen = document.getElementById("resumen");
const resumen2 = document.getElementById("resumen2");
const habilidades = document.getElementById("cuadrohabilidades")
const cerrarh = document.getElementById("cerrarh");
const sig = document.getElementById("sig");
const ant = document.getElementById("ant");
const descrip = document.getElementById("Rdescripcion");
const TextR = document.getElementById("TextoResumen");
const logo = document.getElementById("logo");
const On = document.getElementById("On");
const Particulas = document.getElementById("Particulas");

let activo = true;




const activar = () => {
if(activo == true){
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
}
else{
  particlesJS(
    {
        "particles": false,
          "number": {
            "value": 0,
            "density": {
              "enable": false,
              "value_area": 40
            
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
            "random": false,
            "anim": {
              "enable": false,
              "speed": 0,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.24,
            "width": 2
          },
          "move": {
            "enable": false,
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
              "enable": false,
              "mode": "grab"
            },
            "onclick": {
              "enable": false,
              "mode": "remove"
            },
            "resize": false
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 0,
              "size": 00,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 0,
              "duration": 0
            },
            "push": {
              "particles_nb": 0
            },
            "remove": {
              "particles_nb": 0
            }
          }
        },
        "retina_detect": true
      }
)
}
}
activar();
On.addEventListener("click", () => {
  if(On.className == "On"){
    On.className = "Off";
    Particulas.className = "Particulasoff";
    activo = false;
    swal.fire({
      title: "Has desactivado las partículas exitosamente",
      confirmButtonText: "Aceptar",
      icon: "error",
    })
  }
  else{
    On.className = "On";
    Particulas.className = "Particulas";
    activo = true;
    swal.fire({
      title: "Se han reactivado las partículas nuevamente",
      confirmButtonText: "Aceptar",
      icon: "success",
    })
  }
  activar()
})

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

resumen.addEventListener("click", () => {
  if(habilidades.className == "Contactoocultar"){
    habilidades.className = "resumen2"
    
  }
  else{
    habilidades.className = "Contactoocultar"
  }
})
resumen2.addEventListener("click", () => {
location.href = "../Ejemplos/index.html"  
})
cerrarh.addEventListener("click", () => {
  if(habilidades.className == "Contactoocultar"){
    habilidades.className = "resumen2"
    
  }
  else{
    habilidades.className = "Contactoocultar"
  }
})
let cambiarinf = 1;
sig.addEventListener("click", () => {
  
 
  if(cambiarinf >= 1){
   cambiarinf++;
   
  }
  if(cambiarinf == 8){
    cambiarinf = 1
    descrip.textContent = "HTML"
    TextR.textContent = "Desarrollo de cualquier estructura HTML. Páginas web, formularios, sliders, galerías de imágenes y vídeos"
  logo.src = "Imagenes/html.png"
  
  }
  if(cambiarinf == 2){
    descrip.textContent = "CSS"
    TextR.textContent = "Control total en el diseño web, imágenes, colores, fondos. Diseños adaptables a dispositivos móviles y optimizados para una mejor visualización en estos."
    logo.src = "Imagenes/css.png"
    
  }
  if(cambiarinf == 3){
    descrip.textContent = "Javascript"
    TextR.textContent = "Conocimiento en la validación de formularios, manejo completo del DOM, envío de información mediante eventos submit's, creación de expresiones regulares personalizadas y mucho más"
    logo.src = "Imagenes/javascript.png"
    
  }
  if(cambiarinf == 4){
    descrip.textContent = "Python"
    TextR.textContent = "Actualmente en proceso de aprendizaje. Variables, condicionales, funciones, listas, tuplas, diccionarios y elementos de sintáxis básica."
    logo.src = "Imagenes/python.png"
    
  }
  if(cambiarinf == 5){
    descrip.textContent = "PHP"
    TextR.textContent = "Actualmente en proceso de aprendizaje. Variables, condicionales y elementos básicos de la sintáxis"
    logo.src = "Imagenes/php.png"
    
  }
  if(cambiarinf == 6){
    descrip.textContent = "GITHUB"
    TextR.textContent = "GITHUB Pages, repositorios y entre otros"
    logo.src = "Imagenes/github.png"
    
  }
  if(cambiarinf == 7){
    descrip.textContent = "GIT"
    TextR.textContent = "Manejo de la consola, configuración y enlace de git con github. Comandos y uso de la terminal de editores de código enlazada con git"
    logo.src = "Imagenes/git.png"
    
  }
  
})



ant.addEventListener("click", () => {
  
 
  if(cambiarinf <= 7){
   cambiarinf--;
   
   logo.src = "Imagenes/git.png"
   descrip.textContent = "GIT"
    TextR.textContent = "Manejo de la consola, configuración y enlace de git con github. Comandos y uso de la terminal de editores de código enlazada con git"
  }
  if(cambiarinf == 0){
    cambiarinf = 7
    
  }
  if(cambiarinf == 2){
    
    logo.src = "Imagenes/css.png"
    descrip.textContent = "CSS"
    TextR.textContent = "Control total en el diseño web, imágenes, colores, fondos. Diseños adaptables a dispositivos móviles y optimizados para una mejor visualización en estos."
  }
  if(cambiarinf == 3){
    
    logo.src = "Imagenes/javascript.png"
    descrip.textContent = "Javascript"
    TextR.textContent = "Conocimiento en la validación de formularios, manejo completo del DOM, envío de información mediante eventos submit's, creación de expresiones regulares personalizadas y mucho más"
  }
  if(cambiarinf == 4){
    
    logo.src = "Imagenes/python.png"
    descrip.textContent = "Python"
    TextR.textContent = "Actualmente en proceso de aprendizaje. Variables, condicionales, funciones, listas, tuplas, diccionarios y elementos de sintáxis básica."
  }
  if(cambiarinf == 5){
    
    logo.src = "Imagenes/php.png"
    descrip.textContent = "PHP"
    TextR.textContent = "Actualmente en proceso de aprendizaje. Variables, condicionales y elementos básicos de la sintáxis"
  }
  if(cambiarinf == 6){
    
    logo.src = "Imagenes/github.png"
    descrip.textContent = "GITHUB"
    TextR.textContent = "GITHUB Pages, repositorios y entre otros"
  }
  if(cambiarinf == 1){
    
    logo.src = "Imagenes/html.png"
    descrip.textContent = "HTML"
    TextR.textContent = "Desarrollo de cualquier estructura HTML. Páginas web, formularios, sliders, galerías de imágenes y vídeos"
  }
  
})

}())