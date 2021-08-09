const Formulario = document.getElementById("formulario");
const Inputs = document.querySelectorAll("#formulario input");
const Sexo = document.querySelectorAll("#contenerSexo input");


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
        ValidarForm(I.target, expresiones.nombre, I.target.name);
        nombre(I.target, expresiones.nombre, I.target.name);
        Datos();
    break
    case "Apellido":
        ValidarForm(I.target, expresiones.nombre, I.target.name);
        apellido(I.target, expresiones.nombre, I.target.name);
        Datos();
    break
    case "Correo":
        ValidarForm(I.target, expresiones.correo, I.target.name);
        correo(I.target, expresiones.correo, I.target.name);
        Datos();
    break
    case "Contraseña":
        ValidarForm(I.target, expresiones.password, I.target.name);
        contraseña(I.target, expresiones.password, I.target.name);
        Datos();
    break
    case "Dia":
        ValidarForm(I.target, expresiones.Dia, I.target.name);
        CantidadDia();
        Fecha();
    break
    case "Mes":
        ValidarForm(I.target, expresiones.Dia, I.target.name);
        CantidadMes();
        Fecha();
    break
    case "Año":
        ValidarForm(I.target, expresiones.Año, I.target.name);
        CantidadAño();
        Fecha();
    break
    case "Terminos":
        Terminos();
        Terminoss();
    break
}
}
const correo = (Campo, expresion, input) =>{ 
    if(expresion.test(Campo.value)){
        document.getElementById("textoDatos").textContent = `Tu ${input} es correcto.`;  
    }
    else{
        document.getElementById("textoDatos").textContent = `Tu ${input} no tiene un dominio válido`;  
    }
    if(Campo.value == 0){
        document.getElementById("textoDatos").textContent = `Tu ${input} no puede quedar vacío. `;  
    }
}
const apellido = (Campo, expresion, input) =>{ 
    if(expresion.test(Campo.value)){
        document.getElementById("textoDatos").textContent = `Tu ${input} es correcto.`;  
    }
    else{
        document.getElementById("textoDatos").textContent = `Tu ${input} debe tener mínimo 4 letras y máximo 16. No debe contener carácteres especiales. `;  
    }
    if(Campo.value == 0){
        document.getElementById("textoDatos").textContent = `Tu ${input} no puede quedar vacío. `;  
    }
}
const contraseña = (Campo, expresion, input) =>{ 
    if(expresion.test(Campo.value)){
        document.getElementById("textoDatos").textContent = `Tu ${input} es válida.`;  
    }
    else{
        document.getElementById("textoDatos").textContent =  `Tu ${input} debe tener mínimo 6 dígitos y máximo 20. `
    }
    if(Campo.value == 0){
        document.getElementById("textoDatos").textContent = `Tu ${input} no puede quedar vacía. `;  
    }
}
const nombre = (Campo, expresion, input) =>{ 
    if(expresion.test(Campo.value)){
        document.getElementById("textoDatos").textContent = `Tu ${input} es correcto.`;  
        Mujer()
        Hombre()
    }
    else{
        
        document.getElementById("textoDatos").textContent = `Tu ${input} debe tener mínimo 4 letras y máximo 16. No debe contener carácteres especiales. `; 
    }
    if(Campo.value == 0){
        document.getElementById("textoDatos").textContent = `Tu ${input} no puede quedar vacío. `;  
    }
}
const ValidarForm = (Campo, expresion, input ) => {
if(expresion.test(Campo.value)){
    document.getElementById(`${input}`).classList.remove("falta");
    document.getElementById(`${input}`).classList.remove("falta1");
    document.getElementById(`${input}`).classList.remove("falta2");
    document.getElementById(`${input}`).classList.remove("falta3");
    I[`${input}`] = true;
    e[`${input}`] = true;
}
else{
    document.getElementById(`${input}`).classList.add("falta");
    document.getElementById(`${input}`).classList.add("falta1");
    document.getElementById(`${input}`).classList.add("falta2");
    document.getElementById(`${input}`).classList.add("falta3");
    I[`${input}`] = false;
    e[`${input}`] = false;
}



}

const sexoComp = (I) => {
    switch(I.target.name){
        case "Mujer":
        Mujer();
        break
        case "Hombre":
        Hombre();
        break
    }
}

const Mujer = () => {
    if (formulario.Mujer.checked == true){
        formulario.Hombre.checked = undefined;
        document.getElementById("textoSexo").textContent =  `Hola, ${formulario.Nombre.value}. Bienvenida. `
        I.Sexo = true;
        e.Sexo = true;
        document.getElementById("contenerSexo").classList.remove("contenerSexo1");
    }
    if(formulario.Nombre.value == 0){
        document.getElementById("textoSexo").textContent =  `Bienvenida. `
        
    }
}
const Hombre = () => {
    if (formulario.Hombre.checked == true){
        formulario.Mujer.checked = undefined;
        document.getElementById("textoSexo").textContent =  `Hola, ${formulario.Nombre.value}. Bienvenido. `
        I.Sexo = true;
        e.Sexo = true;
    }
    document.getElementById("contenerSexo").classList.remove("contenerSexo1");
    if(formulario.Nombre.value == 0){
        document.getElementById("textoSexo").textContent =  `Bienvenido. `
    }
}

const CantidadDia = () => {
 if(formulario.Dia.value < 32 && formulario.Dia.value >= 1){
    document.getElementById("Dia").classList.remove("falta3");
    document.getElementById("textoEdad").textContent = "Dia válido.";
    I.Dia = true;
    e.Dia = true;
 } else{
    document.getElementById("Dia").classList.add("falta3");
    document.getElementById("textoEdad").textContent = `¿Dia ${Dia.value}?. Verifica los datos, por favor`;
    I.Dia = false;
    e.Dia = false;
 }
 if(formulario.Dia.value > 33){
    document.getElementById("textoEdad").textContent = `¿Dia ${Dia.value}?. ¿En serio?`;
 }
 if(formulario.Dia.value > 35){
    document.getElementById("textoEdad").textContent = `Oye, solo intento hacer mi trabajo, escribe una edad correcta`;
 }
 if(formulario.Dia.value > 40){
    document.getElementById("textoEdad").textContent = `De verdad, necesito el trabajo, ayúdame`;
 }
 if(formulario.Dia.value > 45){
    document.getElementById("textoEdad").textContent = `Solo quiero ser una interfaz amigable`;
 }
 if(formulario.Dia.value > 50){
    document.getElementById("textoEdad").textContent = `aaaaaaaaaaaaaa`;
 }
 if(formulario.Dia.value > 51){
    document.getElementById("textoEdad").textContent = `Ok, tú lo pediste`;
 }
 if(formulario.Dia.value > 52){
    window.close();
 }
 
 if(formulario.Dia.value < 1){
    document.getElementById("textoEdad").textContent = `Día no válido. Verifica, por favor. `;
 }
}
const CantidadMes = () => {
 if(formulario.Mes.value < 13 && formulario.Mes.value >= 1){
    document.getElementById("Mes").classList.remove("falta3");
    document.getElementById("textoEdad").textContent = "Mes válido.";
    I.Mes = true;
    e.Mes = true;
 } else{
    document.getElementById("Mes").classList.add("falta3");
    document.getElementById("textoEdad").textContent = `¿Mes ${Mes.value}?. Enembre no existe`;
    I.Año = false;
    e.Mes = false;
 }
 if(formulario.Mes.value > 13){
    document.getElementById("textoEdad").textContent = `¿Mes ${Mes.value}?. ¿Entonces qué signo zodiacal eres? `;
 }
 if(formulario.Mes.value < 1){
    document.getElementById("textoEdad").textContent = `¿Entendemos que quieras empezar de ${Mes.value}, pero no aquí, por favor. `;
 }
 
 if(formulario.Mes.value < 1){
    document.getElementById("textoEdad").textContent = `Ingresa un mes correcto, por favor. `;
 }
}
const CantidadAño = () => {
    let Tiempo = new Date();
    Taño = Tiempo.getFullYear() - formulario.Año.value;
    Taño2 = Tiempo.getFullYear();
   Taño3 = Tiempo.getFullYear() - 70;
 if(Taño > 17 && formulario.Año.value >= Taño3){
    document.getElementById("Año").classList.remove("falta3");
    document.getElementById("textoEdad").classList.add("textoEdad1");
    document.getElementById("textoEdad").textContent = `Tienes ${Taño} años. Bienvenido`;
    I.Año = true;
    e.Año = true;
 } else{
    document.getElementById("Año").classList.add("falta3");
    document.getElementById("textoEdad").classList.add("textoEdad1");
    document.getElementById("textoEdad").textContent = `Tienes ${Taño} años. Debes ser mayor de edad`;
    I.Año = false;
    e.Año = false;
 }
 if (formulario.Año.value < Taño3){
    document.getElementById("textoEdad").textContent = `Tienes ${Taño} años. Debes ser menor a 70`;
 }
 if(Taño > 100){
    document.getElementById("textoEdad").textContent = `Tienes ${Taño} años. ¿Hay Internet en el cielo?`; 
 }
 if(Taño < 5){
    document.getElementById("textoEdad").textContent = `Tienes ${Taño} años. Eres súper dotado pero no mayor de edad`; 
 }
 if(formulario.Año.value < 1){
    document.getElementById("textoEdad").textContent = `Año incorrecto`; 
 }
 if(Taño2 < formulario.Año.value){
    document.getElementById("textoEdad").textContent = `Wow, vienes del futuro a registrarte. Lamentablemente no eres permitido`; 
 }
 if(Taño2 == formulario.Año.value){
    document.getElementById("textoEdad").textContent = `Pero si aún ni naces`; 
 }
}
const Terminos = () =>{
    if(formulario.Terminos.checked == true){
        document.getElementById("textoTerminos").textContent = `Términos validados`;
        I.Terminos = true;
        e.Terminos = true;
        document.getElementById("contenerTerminos").classList.remove("contenerTerminos1");
}
    else{
        document.getElementById("textoTerminos").textContent = `Acepta los términos`;
        I.Terminos = false;
        e.Terminos = false;
        document.getElementById("contenerTerminos").classList.add("contenerTerminos1");
}
}
let I = {
    Nombre: false,
    Apellido: false,
    Correo: false,
    Contraseña: false,
    Dia: false,
    Mes: false,
    Año: false,
    Terminos: false,
    Sexo: false
}
let e = {
    Nombre: false,
    Apellido: false,
    Correo: false,
    Contraseña: false,
    Dia: false,
    Mes: false,
    Año: false,
    Terminos: false,
    Sexo: false
}
const Datos = ( ) => {
    if(e.Nombre == false && e.Apellido == false && e.Correo == false && e.Contraseña == false){
        document.getElementById("Datos").classList.add("DatosRojos");
        document.getElementById("Nombre").classList.add("falta");
    document.getElementById("Apellido").classList.add("falta");
    document.getElementById("Correo").classList.add("falta2");
    document.getElementById("Contraseña").classList.add("falta1");
    }
    else{
        document.getElementById("Datos").classList.remove("DatosRojos");
        
    }
}
const Sexos = ( ) => {
    if(e.Sexo == false){
        document.getElementById("contenerSexo").classList.add("contenerSexo1");
    }
    else{
        document.getElementById("contenerSexo").classList.remove("contenerSexo1");
    }
}
const Fecha = ( ) => {
    if(e.Dia == false && e.Mes == false && e.Año == false){
        document.getElementById("contenerEdad").classList.add("contenerEdad1");
        document.getElementById("Dia").classList.add("falta3");
        document.getElementById("Mes").classList.add("falta3");
        document.getElementById("Año").classList.add("falta3");
        document.getElementById("textoEdad").textContent = `Todos los campos incorrectos`;
    }
    else{
        document.getElementById("contenerEdad").classList.remove("contenerEdad1");
    }
}

const Terminoss = () => {
    if(e.Terminos == false){
        document.getElementById("contenerTerminos").classList.add("contenerTerminos1");
    }
    else{
        document.getElementById("contenerTerminos").classList.remove("contenerTerminos1");
    }
}

Inputs.forEach((I) => {
    I.addEventListener("blur", validar);
    formulario.Terminos.addEventListener("click", validar)
})
Sexo.forEach((I) => {
    I.addEventListener("click", sexoComp);
})
Formulario.addEventListener("submit", (e) => {
    if(I.Nombre == true && I.Apellido == true && I.Correo == true && I.Contraseña == true && I.Dia == true && I.Mes == true && I.Año == true && I.Terminos == true && I.Sexo == true){
       e.preventDefault();
        document.getElementById("textoTerminos").textContent = `Datos enviados`;
        document.getElementById("textoTerminos").classList.add("textoTerminos1");
    }
    else{
        
        Datos();
        Fecha();
        Terminoss();
        Sexos();
        e.preventDefault();
    }
})