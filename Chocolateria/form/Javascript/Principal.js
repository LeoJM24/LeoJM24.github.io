const Boton = document.getElementById("BBusqueda");
const Boton1 = document.getElementById("c2");
const Boton2 = document.getElementById("c1");
let Imagen = document.getElementById("Presionar");
const Boton3 = document.getElementById("c4");
const Boton4 = document.getElementById("c3");
let Imagen2 = document.getElementById("Presionar2");
const Boton5 = document.getElementById("c6");
const Boton6 = document.getElementById("c5");
let Imagen3 = document.getElementById("Presionar3");
let Aqui = document.getElementById("Aqui");
let Recuadro = true;

const Cambiar = () => {


if (Recuadro == true){
    document.getElementById("Contener").className = "ContenerBusqueda Trasladar";
    document.getElementById("BBusqueda").className = "Boton botonDelado";
    Recuadro = false;
}
else{
    document.getElementById("Contener").className = "ContenerBusqueda";
    document.getElementById("BBusqueda").className = "Boton ";
    Recuadro = true;
}
}

Boton.addEventListener("click", Cambiar);

const Reloj = ( ) => {
    let Tiempo = new Date();
    let Hora = Tiempo.getHours();
    let Minutos = Tiempo.getMinutes() ;
    let Segundos = Tiempo.getSeconds();
    let Cambio = "";
    let AMPM = document.getElementById("AmPm");
    let TMinuto = document.getElementById("Minutos");
    let TSegundos = document.getElementById("Segundos");
    let THora = document.getElementById("Hora");
 if (Hora >= 12){
     Hora+= -12;
     
     Cambio = "PM";
 }
 else{
    Cambio = "AM";
}
 if(Hora == 0){
     
     Hora+= 12;
     
 }
 if(Minutos < 10){
     Minutos = "0" + Minutos;
 }
 
 if( Segundos < 10){
     Segundos = "0" + Segundos;
 }
 
    THora.textContent = Hora ;
    TMinuto.textContent = Minutos;
    TSegundos.textContent = Segundos;
    AMPM.textContent = Cambio;
}

Reloj();
const Auto = setInterval(Reloj, 1000);

let cambio = 0;
const cambiar = () => {
if(cambio == 0){
    Imagen.classList.remove("n3");
    Imagen.classList.add("n1");
    
}
else{
   
}
if(cambio == 1){
    Imagen.classList.remove("n1");
    Imagen.classList.add("n2");
    
}
else{
    
}
if(cambio == 2){
    Imagen.classList.remove("n2");
    Imagen.classList.add("n3");
    
}
else{
    
}

}


const cambiar2 = () => {
if(cambio == 0){
    Imagen2.classList.remove("n6");
    Imagen2.classList.add("n4");
    
}
else{
   
}
if(cambio == 1){
    Imagen2.classList.remove("n4");
    Imagen2.classList.add("n5");
    
}
else{
    
}
if(cambio == 2){
    Imagen2.classList.remove("n5");
    Imagen2.classList.add("n6");
    
}
else{
    
}

}


const cambiar4 = () => {
if(cambio == 0){
    Imagen3.classList.remove("n9");
    Imagen3.classList.add("n7");
    
}
else{
   
}
if(cambio == 1){
    Imagen3.classList.remove("n7");
    Imagen3.classList.add("n8");
    
}
else{
    
}
if(cambio == 2){
    Imagen3.classList.remove("n8");
    Imagen3.classList.add("n9");
    
}
else{
    
}

}



const auto = () => {
    
    
        if (cambio >= 0){
            cambio++
           
        }
        if (cambio > 2){
            cambio = 0;
        }
        cambiar();
        
}
let intervalo = setInterval(auto, 4000);
const auto1 = () => {
    
    
        if (cambio >= 0){
            cambio++
           
        }
        if (cambio > 2){
            cambio = 0;
        }
        cambiar2();
        
}


let intervalo2 = setInterval(auto1, 3000);

const auto2 = () => {
    
    
    if (cambio >= 0){
        cambio++
       
    }
    if (cambio > 2){
        cambio = 0;
    }
    cambiar4();
    
}


let intervalo3 = setInterval(auto2, 4000);


