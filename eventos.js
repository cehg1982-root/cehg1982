function cambiarTexto1() {
    document.getElementById("p1").innerText = "El texto ha cambiado gracias a JavaScript";
}

function cambiarTexto2() {
    document.getElementById("p2").innerText = "Estados unidos de america";
}
function llamarMiPagina1() {
    window.location.href = "pagina1.html";
}
function llamarIndex() {
    window.location.href = "index.html";
}
function displayDate() {
    
    document.getElementById("fecha").innerHTML = new Date().toLocaleString();
    setTimeout(displayDate, 1000);
}
function messageOk() {
    alert('¡Proceso ejecutado con exito!');
}
function llamarMiPagina1() {
    window.location.href = "pagina1.html";
}
function llamarFormulario() {
    window.location.href = "formulario.html";
}

function validacionFormulario() {
    const form = document.querySelector("form");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");

    form.addEventListener("submit", (e) => {
    if (fname.value === "" || lname.value === "") {
        e.preventDefault();
       alert('Debes escribir Nombre y Apellido' );
    }
    else {
        confirm('¡Nombre: ' + fname.value + ' Apellido: ' + lname.value );
    }
    });
}