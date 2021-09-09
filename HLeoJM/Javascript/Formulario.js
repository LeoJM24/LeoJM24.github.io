const Formulario = document.getElementById("formulario");
const Datos = document.getElementById("dato");
const Campos = document.querySelectorAll("#formulario input");

const expresiones = {
    nombre: /^[a-zA-Z]{4,16}$/,
    password: /^[a-zA-Z0-9\_\-]{6,20}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]/,
    Dia: /^[0-9]{1,2}$/,
    Año: /^[0-9]{1,4}$/
}

const validar = (I) => {
    switch(I.target.name){
        case "Nombre":
        comprobar(expresiones.nombre, I.target, I.target.name);
        datos();
        break;
        case "Apellido":
            comprobar(expresiones.nombre, I.target, I.target.name);
            datos();
        break;
        case "Correo":
            comprobar(expresiones.correo, I.target, I.target.name);
            datos();
        break;
        case "Contraseña":
            comprobar(expresiones.password, I.target, I.target.name);
            datos();
            clave();
        break;
        case "Repetir":
            comprobar(expresiones.password, I.target, I.target.name);
            datos();
            clave();
        break;
        case "Dia":
            comprobar(expresiones.Dia, I.target, I.target.name);
            fecha();
            Dia();
        break;
        case "Mes":
            comprobar(expresiones.Dia, I.target, I.target.name);
            fecha();
            Mes();
        break;
        case "Año":
            comprobar(expresiones.Año, I.target, I.target.name);
            fecha();
            Año();
        break;
        case "Hombre":
        Hombre();
        break;
        case "Mujer":
        Mujer();
        break;
        case "Terminos":
        Terminos();
        
        break;
    }
}
let I={
Nombre: false,
Apellido: false,
Correo: false,
Contraseña: false,
Dia: false,
Mes: false,
Año: false,
Sexo: false,
Terminos: false
}
const Dia = () => {
    if (formulario.Dia.value < 32 && formulario.Dia.value > 0){
        document.getElementById("Dia").classList.remove("falta");
        I.Dia = true;
    }
    else{
        document.getElementById("Dia").classList.add("falta");
        I.Dia = false;
        
    }
    fecha();
}
const Mes = () => {
    if (formulario.Mes.value < 13 && formulario.Mes.value > 0){
        document.getElementById("Mes").classList.remove("falta");
        I.Mes = true;
    }
    else{
        document.getElementById("Mes").classList.add("falta");
        I.Mes = false;
        
    }
    fecha();
}
const Año = () => {
    let Tiempo = new Date();
    Años = Tiempo.getFullYear() - formulario.Año.value;
    
   
    if (Años > 17 && Años < 70){
        document.getElementById("Año").classList.remove("falta");
        I.Año = true;
        
    }
    else{
        document.getElementById("Año").classList.add("falta");
        I.Año = false;
        
    }
    fecha();
}
const clave = () => {
    if(formulario.Contraseña.value == formulario.Repetir.value){
        document.getElementById("Repetir").classList.remove("falta");
    }
    else{
        document.getElementById("Repetir").classList.add("falta");
    }
}

const Terminos = () => {
    if(formulario.Terminos.checked == true){
        document.getElementById("terminos").classList.remove("rojos");
        I.Terminos = true;
    }
    else{
        document.getElementById("terminos").classList.add("rojos");
        I.Terminos = false;
    }
}
const datos = () =>{ 
    if(I.Nombre== false && I.Apellido == false && I.Correo == false && I.Contraseña == false){
        document.getElementById("dato").classList.add("rojos");
        document.getElementById("Nombre").classList.add("falta");
    document.getElementById("Apellido").classList.add("falta");
    document.getElementById("Correo").classList.add("falta");
    document.getElementById("Contraseña").classList.add("falta");
    document.getElementById("Repetir").classList.add("falta");
    }
    else{
        document.getElementById("dato").classList.remove("rojos");
       
    }
}

const fecha = ( ) => {
    if(I.Dia == false && I.Mes == false && I.Año == false){
        document.getElementById("fecha").classList.add("rojos");
        document.getElementById("Dia").classList.add("falta");
    document.getElementById("Mes").classList.add("falta");
    document.getElementById("Año").classList.add("falta");
    }
    else{
        document.getElementById("fecha").classList.remove("rojos");
    }
}
const sexo = () => {
    if(I.Sexo == true){
        document.getElementById("sexo").classList.remove("rojos");
    }
    else{
        document.getElementById("sexo").classList.add("rojos");
    }
}
const Hombre = () => {
    if(formulario.Hombre.checked == true){
        formulario.Mujer.checked = undefined;
        I.Sexo = true;
        document.getElementById("sexo").classList.remove("rojos");
    }
    else{
        I.Sexo = false;
    }
}
const Mujer = () => {
    if(formulario.Mujer.checked == true){
        formulario.Hombre.checked = undefined;
        I.Sexo = true;
        document.getElementById("sexo").classList.remove("rojos");
    }
    else{
        I.Sexo = false;
    }
}

const comprobar = (expresion, campo, input) => {
    if(expresion.test(campo.value)){
        document.getElementById(`${input}`).classList.remove("falta");
        
        I[`${input}`] = true;
    }
    else{
        document.getElementById(`${input}`).classList.add("falta");
        I[`${input}`]  = false;
    }
}

Campos.forEach((I) => {

I.addEventListener("blur", validar);
I.addEventListener("click", validar);
})

Formulario.addEventListener("submit", (e) => {
    if(I.Nombre && I.Apellido  && I.Correo  && I.Contraseña  && I.Terminos && I.Dia && I.Mes && I.Año && I.Sexo ){
        
        document.getElementById("sello").classList.add("aprobado");
        document.getElementById("sello").classList.remove("aprobadonegado");
        document.getElementById("sello").classList.remove("negado");
        e.preventDefault();
    }
    
    else{
        
        datos();
        fecha();
        Terminos();
        sexo();
        e.preventDefault();
        document.getElementById("sello").classList.remove("aprobado");
        document.getElementById("sello").classList.remove("aprobadonegado");
        document.getElementById("sello").classList.add("negado");
        
    }
})