// script para validación de formulario

function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("mensaje").value;

    if (name == "") {
        alert("Por favor ingrese su nombre.");
        return false;
    }
    if (email == "") {
        alert("Por favor ingrese su email.");
        return false;
    }
    if (message == "") {
        alert("Por favor deje un mensaje.");
        return false;
    }
    return true;
}