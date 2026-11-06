
// ===================================
// 1. CONFIGURACIÓN DE SUPABASE
// ===================================

const SUPABASE_URL = "https://hypxybgvxvpwfqflijty.supabase.co";

const SUPABASE_KEY = "sb_publishable_x6A2XiGzM9F2Qlk9xwBUvA_UK3HoJJz";

const sb = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


// ===================================
// 2. VALIDACIÓN DEL FORMULARIO
// ===================================

document.getElementById("loginForm")
.addEventListener("submit", async function(e) {

    e.preventDefault();

    const email = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    const mensaje = document.getElementById("mensaje");
    const boton = document.getElementById("btnEnviar");

    mensaje.textContent = "Validando usuario...";
    boton.disabled = true;

    // ===================================
    // 3. AUTENTICACIÓN EN SUPABASE
    // ===================================

    const { data, error } = await sb.auth.signInWithPassword({
        email: email,
        password: password
    });

    boton.disabled = false;

    // ===================================
    // 4. VALIDAR RESPUESTA
    // ===================================

    if (error) {

        mensaje.textContent =
            "Usuario o contraseña incorrectos.";

        mensaje.style.color = "#ffaaaa";

        return;
    }

    mensaje.textContent = "¡Acceso autorizado!";
    mensaje.style.color = "#90ee90";

    console.log("Usuario autenticado:", data.user);

    // ===================================
    // 5. REDIRECCIONAR
    // ===================================

    window.location.href = "bienvenido.html";

});
