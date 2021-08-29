let visor = document.getElementById("visor");
const botones = document.querySelectorAll("#teclado div");
alert("Atención: Esta página solo es una demo para mostrar el diseño, por lo cual no cuenta con base de datos. Ingrese cualquier número mayor a `1000` para continuar")
const ejecutar = (i) => {
   switch(i.target.className){
       case "t1":
          visor.value += 1;
          comprobar();
        break
       case "t2":
        visor.value += 2;
        comprobar();
        break
       case "t3":
        visor.value += 3;
        comprobar();
        break
       case "t4":
        visor.value += 4;
        comprobar();
        break
       case "t5":
        visor.value += 5;
        comprobar();
        break
       case "t6":
        visor.value += 6;
        comprobar();
        break
       case "t7":
        visor.value += 7;
        comprobar();
        break
       case "t8":
        visor.value += 8;
        comprobar();
        break
       case "t9":
        visor.value += 9;
        comprobar();
        break
       case "t0":
        visor.value += 0;
        comprobar();
        break
       case "borrar":
          visor.value = visor.value.slice(0,-1);
        break
   }
}

const comprobar = () => {
    if (visor.value > 1000){
        location.href = "https://leojm24.github.io/Cajafuerte/"
    }
}

botones.forEach((i) => {
    i.addEventListener("click", ejecutar)
})