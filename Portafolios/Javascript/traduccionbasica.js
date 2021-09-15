(function(){
const TR1 = document.getElementById(id="TR1");
const TR2 = document.getElementById(id="TextoResumen");
const TR3 = document.getElementById(id="cerrarh");
const TR4 = document.getElementById(id="cerrar");
const TR5 = document.getElementById(id="TR5");
const TR6 = document.getElementById(id="TR6");
const TR7 = document.getElementById(id="TR7");
const TR8 = document.getElementById(id="TR8");
const TR9 = document.getElementById(id="TR9");
const TR10 = document.getElementById(id="TR10");
const TR11 = document.getElementById(id="mostrar");
const TR12 = document.getElementById(id="TR12");
const TR13 = document.getElementById(id="TR13");
const TR14 = document.getElementById(id="TR14");
const TR15 = document.getElementById(id="TR15");
const TR16 = document.getElementById(id="TR16");
const resumen1 = document.getElementById(id="resumen");
const resumen2 = document.getElementById(id="resumen2");
const IDIOMA = document.querySelectorAll("#idioma div");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const sig = document.getElementById("sig");
const ant = document.getElementById("ant");
const descrip = document.getElementById("Rdescripcion");
const TextR = document.getElementById("TextoResumen");
const logo = document.getElementById("logo");
let inglesvalidar = false; 
let cambiarinf = 1;
const cambiar = (I) => {
    switch(I.target.className){
        case "Español":
          cambiarinf = 1;
            inglesvalidar = false;
            
            español()
        break
        case "Ingles":
          cambiarinf = 1;
            inglesvalidar = true;
            ingles()
        break
    }
}

const ingles = () => {
    TR1.textContent = "Skills summary";
    resumen1.value = "Skills summary"
    TR2.textContent = "Development of any HTML structure. Web pages, forms, sliders, image galleries and videos";
    TR3.textContent = "Close";
    TR4.textContent = "Close";
    TR5.textContent = "Hi, i'm Leonardo Morillo";
   
    TR8.textContent = "Based on 3D development";
    TR9.textContent = "LeoJM, development and entertainment";
    TR10.textContent = "Download CV";
    TR11.textContent = "Contact";
    TR12.textContent = "Repositories";
    TR13.textContent = "I welcome you to my portfolio";
    TR14.textContent = "Some projects";
    TR15.textContent = "Candy store";
    TR16.textContent = "Bilion banking";
    btn1.value = "See on github"
    btn3.value = "See on github"
    btn5.value = "See on github"
    btn7.value = "See on github"
    btn2.value = "See page"
    btn4.value = "See page"
    btn6.value = "See page"
    btn8.value = "See page"
    
}
const español = () => {
    TR1.textContent = "Resumen habilidades";
    resumen1.value = "Resumen habilidades"
    TR2.textContent = "Desarrollo de cualquier estructura HTML. Páginas web, formularios, sliders, galerías de imágenes y vídeos";
    TR3.textContent = "Cerrar";
    TR4.textContent = "Cerrar";
    TR5.textContent = "Hola, soy Leonardo Morillo";
   
    TR8.textContent = "Con bases en desarrollo 3D";
    TR9.textContent = "LeoJM, Desarrollo y entretenimiento";
    TR10.textContent = "Descargar CV";
    TR11.textContent = "Contacto";
    TR12.textContent = "Repositorios";
    TR13.textContent = "Te doy la bienvenida a mi portafolios";
    TR14.textContent = "Algunos proyectos";
    TR15.textContent = "Dulcería";
    TR16.textContent = "Banca Bilion";
    btn1.value = "Ver en github"
    btn3.value = "Ver en github"
    btn5.value = "Ver en github"
    btn7.value = "Ver en github"
    btn2.value = "Ver página"
    btn4.value = "Ver página"
    btn6.value = "Ver página"
    btn8.value = "Ver página"
}

IDIOMA.forEach((I) => {
I.addEventListener("click", cambiar)
})

sig.addEventListener("click", () => {
  
 
    if(cambiarinf >= 1 ){
     cambiarinf++;
     
    }
    if(cambiarinf == 8 && inglesvalidar == true){
      cambiarinf = 1
      descrip.textContent = "HTML"
      TextR.textContent = "Development of any HTML structure. Web pages, forms, sliders, image galleries and videos"
    logo.src = "Imagenes/html.png"
    
    }
 
    if(cambiarinf == 2 && inglesvalidar == true){
      descrip.textContent = "CSS"
      TextR.textContent = "Full control in web design, images, colors, backgrounds. Designs adaptable to mobile devices and optimized for better visualization on them."
      logo.src = "Imagenes/css.png"
      
    }

    if(cambiarinf == 3 && inglesvalidar == true){
      descrip.textContent = "Javascript"
      TextR.textContent = "Knowledge of form validation, full DOM handling, submitting information through submit's events, creating custom regular expressions and much more"
      logo.src = "Imagenes/javascript.png"
      
    }
   
    if(cambiarinf == 4 && inglesvalidar == true){
      descrip.textContent = "Python"
      TextR.textContent = "Currently in the learning process. Variables, conditionals, functions, lists, tuples, dictionaries, and basic syntax elements."
      logo.src = "Imagenes/python.png"
      
    }
  
    if(cambiarinf == 5 && inglesvalidar == true){
      descrip.textContent = "PHP"
      TextR.textContent = "Currently in the learning process. Variables, conditionals, and basic elements of syntax"
      logo.src = "Imagenes/php.png"
      
    }

    if(cambiarinf == 6 && inglesvalidar == true){
      descrip.textContent = "GITHUB"
      TextR.textContent = "GITHUB Pages, repositories and among others"
      logo.src = "Imagenes/github.png"
      
    }

    if(cambiarinf == 7 && inglesvalidar == true){
      descrip.textContent = "GIT"
      TextR.textContent = "Management of the console, configuration and link of git with github. Commands and use of the git-bound code editors terminal"
      logo.src = "Imagenes/git.png"
      
    }
  
    
  })
  
  resumen1.addEventListener("click", () => {
    if(cambiarinf == 1 && inglesvalidar == true){
      descrip.textContent = "HTML"
    TextR.textContent = "Development of any HTML structure. Web pages, forms, sliders, image galleries and videos"
  logo.src = "Imagenes/html.png"
    }
    if(cambiarinf == 1 && inglesvalidar == false){
      descrip.textContent = "HTML"
    TextR.textContent = "Desarrollo de cualquier estructura HTML. Páginas web, formularios, sliders, galerías de imágenes y vídeos"
  logo.src = "Imagenes/html.png"
    }
  })
  
  ant.addEventListener("click", () => {
    
   
    if(cambiarinf <= 7 && inglesvalidar == true){
     cambiarinf--;
     
     logo.src = "Imagenes/git.png"
     descrip.textContent = "GIT"
      TextR.textContent = "Management of the console, configuration and link of git with github. Commands and use of the git-bound code editors terminal"
    }
    
    
    if(cambiarinf == 0){
      cambiarinf = 7
      
    }
    
    if(cambiarinf == 2 && inglesvalidar == true){
      
      logo.src = "Imagenes/css.png"
      descrip.textContent = "CSS"
      TextR.textContent = "Full control in web design, images, colors, backgrounds. Designs adaptable to mobile devices and optimized for better visualization on them."
    }
  
    if(cambiarinf == 3 && inglesvalidar == true){
      
      logo.src = "Imagenes/javascript.png"
      descrip.textContent = "Javascript"
      TextR.textContent = "Knowledge of form validation, full DOM handling, submitting information through submit's events, creating custom regular expressions and much more"
    }
   
    if(cambiarinf == 4 && inglesvalidar == true){
      
      logo.src = "Imagenes/python.png"
      descrip.textContent = "Python"
      TextR.textContent = "Currently in the learning process. Variables, conditionals, functions, lists, tuples, dictionaries, and basic syntax elements."
    }
  
    if(cambiarinf == 5 && inglesvalidar == true){
      
      logo.src = "Imagenes/php.png"
      descrip.textContent = "PHP"
      TextR.textContent = "Currently in the learning process. Variables, conditionals, and basic elements of syntax"
    }
    
    if(cambiarinf == 6 && inglesvalidar == true){
      
      logo.src = "Imagenes/github.png"
      descrip.textContent = "GITHUB"
      TextR.textContent = "GITHUB Pages, repositories and among others"
    }
    
    if(cambiarinf == 1 && inglesvalidar == true){
      
      logo.src = "Imagenes/html.png"
      descrip.textContent = "HTML"
      TextR.textContent = "Development of any HTML structure. Web pages, forms, sliders, image galleries and videos"
    }
  
   
  })
}())