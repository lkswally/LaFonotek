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


    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("provincia").selectedIndex = 0; //Valor por defecto en el dropdown
    document.getElementById("mensaje").value = "";

    showPopup(name);
    
    return true;
}

function showPopup(nombreUsuario) {
    var popup = document.getElementById("popup");
    var popupTitle = document.querySelector(".popup-title");
    var popupMessage = document.querySelector(".popup-message");
    popupTitle.textContent = "¡Hola, " + nombreUsuario + "!";
    popupMessage.textContent = "Gracias por completar el formulario de contacto.\n Nos vamos a poner en contacto para responder a tu consulta.";
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}