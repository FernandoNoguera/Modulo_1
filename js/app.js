/* aquí irá todo el js

/* Función para evaluar las credenciales ingresadas */
function ValidaCredenciales(usuario, password){
    if (usuario.value = password.value){
        console.log(usuario.value + " ha ingresado al sistema!");
        alert("BIENVENIDO "+ usuario.value);
        location.href="./PagePrivate.html";
    }
    else {
        console.log("Ha habido un intento de ingresar en el sistema con el usuario: " + usuario.value);
        alert("NO TIENES ACCESO");
        location.href="./Registro.html";
    };
}