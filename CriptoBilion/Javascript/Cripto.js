const formu = document.querySelectorAll("#formulario input");
const formulario = document.getElementById("formulario");
let cant = document.getElementById("cant");
let Lcant = document.getElementById("Lcant");
const mayus = document.getElementById("mayus");
const BTNGenerar = document.getElementById("GenerarC");
let Clave = document.getElementById("generada");

const expresiones = {
    nombre: /^[a-zñA-ZÑ]{4,16}$/,
    password: /^[a-zA-Z0-9\_\-]{6,20}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]/,
    Dia: /^[0-9]{1,2}$/,
    Año: /^[0-9]{1,4}$/
}

let Datos = {
Usuario: false,
Contraseña: false,
Repetir: false,
Correo: false
}

let conf = {
    Cantidad: cant,
    simb: true,
    min: true,
    mayus: true
}

let caracteres = {
    simb: "@ # $ % & / ( ) = ! *",
    min: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
    mayus: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
}
const TodosValidados = () => {
    if(Datos.Usuario == true && Datos.Contraseña == true && Datos.Repetir == true && Datos.Correo == true){
        document.getElementById("Repetir").className = "Validado1";
        document.getElementById("Contraseña").className = "Validado1";
        document.getElementById("Usuario").className = "Validado1";
        document.getElementById("Correo").className = "Validado1";
    }
    if(cant.value >= 21 || cant.value <= 4){
        cant.value = 5;
        Lcant.textContent = "Mínimo 5 y Máximo 20";
        Lcant.className = "Limite"
        setTimeout(() => {Lcant.textContent = "Cantidad de dígitos"; Lcant.className = "Lcant"}, 3000);
    }
}
const Validar = (I) => {
    switch(I.target.name){
        case "Usuario":
            Comprobar(I.target.name, I.target, expresiones.nombre)
            TodosValidados();
        break
        case "Contraseña":
            Comparar();    
        Comprobar(I.target.name, I.target, expresiones.password)
        TodosValidados();
        break
        case "Repetir":
            Comprobar(I.target.name, I.target, expresiones.password)
            Comparar();
            TodosValidados();
        break
        case "Correo":
            Comprobar(I.target.name, I.target, expresiones.correo)
            TodosValidados();
        break
        case "cant":
            
            TodosValidados();
        break
    }
}
const Comparar = () => {
    if (formulario.Contraseña.value == formulario.Repetir.value){
        document.getElementById("Repetir").className = "Validado";
        document.getElementById("Contraseña").className = "Validado";
        Datos.Contraseña = true;
        Datos.Repetir = true;
    }
    else{
        document.getElementById("Repetir").className = "Repetir";
        document.getElementById("Contraseña").className = "Contraseña";
        Datos.Contraseña = false;
        Datos.Repetir = false;
    }
}
const Comprobar = (Nombre, Input, Expresion) => {
    if(Expresion.test(Input.value)){
        document.getElementById(`${Nombre}`).className = "Validado";
        Datos[`${Nombre}`] = true;
    }
    else{
        document.getElementById(`${Nombre}`).className = `${Nombre}`;
        Datos[`${Nombre}`] = false;
    }
}

const MClick = () => {
    conf.mayus = !conf.mayus;
    console.log(conf.simb)
}

const Generar = () => {
    let TodosSimbolos = "";
    let Generada = "";

    for(elementos in conf){
        if(conf[elementos] == true){
            TodosSimbolos += caracteres[elementos] + " ";
        }
    }
    TodosSimbolos = TodosSimbolos.trim();
    TodosSimbolos = TodosSimbolos.split(" ");
    

    for(i = 0; i < parseInt(conf.Cantidad.value); i++){
        Generada += TodosSimbolos[Math.floor(Math.random() * TodosSimbolos.length)];
        Clave.value = Generada;
        Clave.select();
        document.execCommand("copy");
        setTimeout(() => {Clave.value = "Clave copiada"; Clave.className = "Copiada"}, 2000)
        setTimeout(() => {Clave.value = Generada}, 4000)
    }
    
}

formu.forEach((I) => {
I.addEventListener("blur", Validar);
I.addEventListener("keyup", Validar);
I.addEventListener("click", Validar);
})
mayus.addEventListener("click", MClick);
BTNGenerar.addEventListener("click", Generar)
