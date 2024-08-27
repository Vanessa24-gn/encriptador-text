function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")
        .replace(/l/gi, "ola")
        .replace(/s/gi, "nou")
        .replace(/m/gi, "mono");

        if (texto.length != 0) {
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto encriptado con satisfacción";
            parrafo.textContent = "";
            muneco.src = "./img/feliz.png";
        } else {
            muneco.src = "./img/Muñeco.png";
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
            alert("Debes ingresar algún texto");
        }
}