const User = document.getElementById("LUsuario");
const Password = document.getElementById("LContra");
const Repetir = document.getElementById("LRepetir");
const Email = document.getElementById("LCorreo");
const Form = document.querySelectorAll("#formulario label");
const BTNEmpre = document.getElementById("empre");
const BTNPers = document.getElementById("pers");
alert("Esta demo todavía está en desarrollo, por tal motivo, hay sitios que aún no son responsive design")
let UserText = false;
let PassText = false;
let EmailText = false;
let RepetirText = false;


const prueba = (I) => {
switch(I.target.className){
    case "LUsuario":
        if(UserText == false){
            User.textContent = "Usuario:";
            UserText = true;
        }
        else{
            User.textContent = "VXN1YXJpbw==";
            
            UserText = false;
        }
    break;
    case "LContraseña":
        if(PassText == false){
            Password.textContent = "Contraseña:";
            PassText = true;
        }
        else{
            Password.textContent = "Q29udHJhc2XDsWE6";
            
            PassText = false;
        }
    break;
    case "LCorreo":
        if(EmailText == false){
            Email.textContent = "Correo:";
            EmailText = true;
        }
        else{
            Email.textContent = "Q29ycmVvOg==";
            
            EmailText = false;
        }
    break;
    case "LRepetir":
        if(RepetirText == false){
            Repetir.textContent = "Repetir clave:";
            RepetirText = true;
        }
        else{
            Repetir.textContent = "UmVwZXRpciBjbGF2ZQ==";
            
            RepetirText = false;
        }
    break;
}
}

Form.forEach((i) => {
i.addEventListener("pointerenter", prueba)
i.addEventListener("pointerleave", prueba)
})

BTNPers.addEventListener("click", () => {
    location.href = "https://leojm24.github.io/Cuentas/"
})
BTNEmpre.addEventListener("click", () => {
    location.href = "https://leojm24.github.io/Cuentas/"
})

