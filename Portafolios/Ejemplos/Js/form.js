
const ContenedorContacto = document.getElementById("ContenedorContacto");
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const cuadrosexo = document.getElementById("sexo");
const cuadrodatos = document.getElementById("datos");
const cuadrofecha = document.getElementById("fecha");
const cuadroterminos = document.getElementById("terminos");
const cuadroclave = document.getElementById("generada");
const Contacto = document.getElementById("Contacto");

let Extraer = document.getElementById("Cantidad");
const c1 = document.getElementById("c1");
const o1 = document.getElementById("o1");
const n = document.getElementById("n");
const t1 = document.getElementById("t1");
const a = document.getElementById("a");
const c2 = document.getElementById("c2");
const t2 = document.getElementById("t2");
const o2 = document.getElementById("o2");



const Expresiones = {
    nombre: /^[a-zA-Z]{4,16}$/,
    password: /^[a-zA-Z0-9\_\-]{6,20}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]/,
    Dia: /^[0-9]{1,2}$/,
    Año: /^[0-9]{4,4}$/
}

const Ejecutar = (e) => {
    switch(e.target.name){
        case "Nombre":
            validar(e.target, Expresiones.nombre, "Nombre");
            validarDatos();
        break
        case "Apellido":
            validar(e.target, Expresiones.nombre, "Apellido");
            validarDatos();
        break
        case "Correo":
            validar(e.target, Expresiones.correo, "Correo");
            validarDatos();
        break
        case "Contraseña":
            validar(e.target, Expresiones.password, "Contraseña");
            comparar()
            validarDatos();
        break
        case "Repetir":
            validar(e.target, Expresiones.password, "Repetir");
            comparar()
            validarDatos();
        break
        case "Dia":
            validar(e.target, Expresiones.Dia, "Dia");
            Dia();
            validarFecha();
        break
        case "Mes":
            validar(e.target, Expresiones.Dia, "Mes");
            Mes();
            validarFecha();
        break
        case "Año":
            validar(e.target, Expresiones.Año, "Año");
            Año();
            validarFecha();
        break
        case "Hombre":
           Hombre()
        break
        case "Mujer":
            Mujer()
        break
        case "vterminos":
            Terminos();
        break
        case "button":
            GenerarClave();
            validarClave();
        break
        case "MAYUS":
            Conf.Mayusculas = !Conf.Mayusculas;
            console.log(Conf.Mayusculas)
        break
        case "Minus":
            Conf.Minusculas = !Conf.Minusculas;
            console.log(Conf.Minusculas)
        break
        case "Números":
            Conf.Numeros = !Conf.Numeros;
            console.log(Conf.Numeros)
        break
    }
}
const Dia = ( ) => {
    if(formulario.Dia.value <= 0 || formulario.Dia.value >= 32){
        cuadrofecha.className = "fecha Rojos";
        todos.Dia = false;
    }
    else{
        cuadrofecha.className = "fecha";
    }
}
const Mes = () => {
    if(formulario.Mes.value <= 0 || formulario.Mes.value >= 13){
        cuadrofecha.className = "fecha Rojos";
        todos.Mes = false;
    }
    else{
        cuadrofecha.className = "fecha";
    }
}

const Año = () => {
    if(formulario.Año.value >= 2004 || formulario.Año.value >= 2022 || formulario.Año.value <= 1922){
        cuadrofecha.className = "fecha Rojos";
        todos.Año = false;
    }
    else{
        cuadrofecha.className = "fecha";
    }
}
const Caracteres = {
    
    Mayusculas: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
    Minusculas: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
    Numeros: "1 2 3 4 5 6 7 8 9 0",
    Simbolos: "! # $ % & / ( ) * @ [ ] - _ ; . :"
}
let Conf = {
    Cantidad: Extraer,
    Mayusculas: false,
    Minusculas: false,
    Numeros: false,
    Simbolos: true
}

let todos = {
    Nombre: false,
    Apellido: false,
    Correo: false,
    Contraseña: false,
    Repetir: false,
    Dia: false,
    Mes: false,
    Año: false,
    Sexo: false,
    Terminos: false,
    Clave: false
}




const GenerarClave = () => {
    if(Extraer.value >= 8 && Extraer.value <= 20){
        Extraer.className = "ICant"
        CaracteresTotales = "";
    GenerarAqui = "";
    todos.Clave = true;
    for (Propiedad in Conf){
        if(Conf[Propiedad] == true){
            CaracteresTotales += Caracteres[Propiedad] + " ";
            console.log(CaracteresTotales);
        }
        
    }
    CaracteresTotales = CaracteresTotales.trim();
        CaracteresTotales = CaracteresTotales.split(" ");
        console.log(CaracteresTotales);
        for(i=0; i < parseInt(Conf.Cantidad.value); i++){
            GenerarAqui += CaracteresTotales[Math.floor(Math.random() * CaracteresTotales.length)];
            
        }
        document.getElementById("Generada").value = GenerarAqui;
        document.getElementById("Generada").select();
        document.execCommand("copy");
        swal.fire({
            title: "Clave copiada en el portapapeles",
            timer: 5000,
           
            timerProgressBar: true,
            confirmButtonText: "Aceptar",
            icon: "success",
            html: GenerarAqui
          })
    }
    if(Extraer.value > 20){
        todos.Clave = false;
        Extraer.className = "ICant Rojos"
        swal.fire({
            icon: "error",
            title: "La cantidad no puede ser mayor a 20."
        })
    }
    if(Extraer.value < 8){
        todos.Clave = false;
        Extraer.className = "ICant Rojos"
        swal.fire({
            icon: "error",
            title: "La cantidad no puede ser menor a 8."
        })
    }
    
}

const validarClave = () => {
    if(todos.Clave){
        cuadroclave.className = "generada";
    }
    else{
        cuadroclave.className = "generada Rojos";
    }
}
const validarSexo = () => {
    if (todos.Sexo == true){
        cuadrosexo.className = "sexo"
    }
    else{
        cuadrosexo.className = "sexo Rojos"
    }
}
const validarFecha = ( ) => {
    if(todos.Dia && todos.Mes && todos.Año){
        cuadrofecha.className = "fecha";
    }
    else{
        cuadrofecha.className = "fecha Rojos";
    }
}

const validarTerminos = () => {
    if(todos.Terminos){
        cuadroterminos.className = "terminos"
    }
    else{
        cuadroterminos.className = "terminos Rojos"
    }
}

const validarDatos = () => {
    if(todos.Nombre && todos.Apellido && todos.Correo && todos.Contraseña && todos.Repetir){
        cuadrodatos.className = "datos";
    }
    else{
        cuadrodatos.className = "datos Rojos";
    }
}

const Terminos = () => {
    if(formulario.vterminos.checked){
        cuadroterminos.className = "terminos";
        todos.Terminos = true;
    }
    else{
        cuadroterminos.className = "terminos Rojos";
        todos.Terminos = false;
    }
}

const Hombre = ( ) => {
    if (formulario.Hombre.checked == true){
        formulario.Mujer.checked = undefined;
        todos.Sexo = true;
        cuadrosexo.className = "sexo";
    }
    
}
const Mujer = ( ) => {
    if (formulario.Mujer.checked == true){
        formulario.Hombre.checked = undefined;
        todos.Sexo = true;
    }
   
}
const comparar = () => {
    if (formulario.Contraseña.value == formulario.Repetir.value){
        document.getElementById("Contraseña").classList.remove("Rojos");
        document.getElementById("Repetir").classList.remove("Rojos");
    }
    else{
        document.getElementById("Contraseña").classList.add("Rojos");
        document.getElementById("Repetir").classList.add("Rojos");
    }
}

const validar = (Input, Expresion, Campo) => {
    if(Expresion.test(Input.value)){
        document.getElementById(`${Campo}`).classList.remove("Rojos");
        todos[`${Campo}`] = true;
    }
    else{
        document.getElementById(`${Campo}`).classList.add("Rojos");
        todos[`${Campo}`] = false;
    }
}
Contacto.addEventListener("click", () =>{
swal.fire({
    title: "Contacto",
    html: "<p class='wss'>Whatsapp:<p/><p><a target='_blank' href='https://api.whatsapp.com/send/?phone=584249008322&text&app_absent=0'>+58 0424 900 83 22<a/><p/><p class='tl'>Telegram:<p/><p><a target='_blank' href='https://t.me/LeoJMDeveloper'>@LeoJMDeveloper<a/><p/><p class='ins'>Instagram:<p/><p><a target='_blank' href='https://www.instagram.com/leoj_m1/?hl=es'>@LeoJ_M1<a/><p/>"
})
})
inputs.forEach((e)=>{
   
    e.addEventListener("keyup", Ejecutar)
    e.addEventListener("click", Ejecutar)
})

formulario.addEventListener("submit", (e)=> {
if(todos.Nombre && todos.Apellido && todos.Correo && todos.Contraseña && todos.Repetir && todos.Dia && todos.Mes && todos.Año && todos.Terminos && todos.Sexo  && todos.Clave){
e.preventDefault();
swal.fire({
    title: "Datos enviados",
    icon: "success"
})
}
else{
    
    e.preventDefault();
    validarSexo();
    validarDatos();
    validarTerminos();
    validarFecha();
    validarClave();
}
    
})

