const Int = document.getElementById("boton");
const lamp1 = document.getElementById("lamp1");
const lamp2 = document.getElementById("lamp2");
const puerta = document.getElementById("puerta");
const escen = document.getElementById("escenario");
const footer = document.getElementById("footer");


let tiempo = new Date();
año = tiempo.getFullYear();

const piePag = () =>{
    footer.textContent = `LeoJM - copyright - ${año}`;
   
}
piePag();
let puertas = 0;
const cambio = () => {
    if (Int.className == "int"){
        Int.className = "int1";
        lamp1.className = "lamp1off"
        lamp2.className = "lamp2off"
        escen.className = "onoff"
        puerta.className = "puerta1"
    }
    else{
        Int.className = "int";
        lamp1.className = "lamp1"
        lamp2.className = "lamp2"
        escen.className = "escenario"
        puerta.className = "puerta"
    }
    if(puerta.className == "puerta1" && lamp1.className == "lamp1off" ){ 
        puerta.className = "puerta1"
    }
    
   
    
}


let veces = 0;
const tocar = () => {
    
    
    if (veces < 3 && veces >= 1){
    alert("Has tocado la puerta, quizá no hay nadie");
}
    if (veces < 5 && veces > 2){
    alert("Insistes. Escuchas que alguien gruñe");
}
    if (veces < 7 && veces > 4){
    alert("Sigues tocando. Escuchas a alguien caminar hacia la puerta");
}
    if (veces == 7){
    alert("Alguien definitivamente está detrás de la puerta");
}
    if (veces == 8){
    alert("El pomo se mueve, alguien abrirá la puerta");
}
    if (veces == 9){
    alert("Escuchas quitarse el seguro...");
}
    if (veces == 10){
        puerta.className = "puertabierta"
}
    if (veces > 10){
        
        location.href="DulcesLeoJM.html";
        
}

   
}
puerta.addEventListener("click", () => {
    veces++;
    tocar();
});
Int.addEventListener("click", cambio);