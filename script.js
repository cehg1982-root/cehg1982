// ======================================
// 1. CONFIGURACIÓN DE SUPABASE
// ======================================

const SUPABASE_URL = "https://hypxybgvxvpwfqflijty.supabase.co";
const SUPABASE_KEY = "sb_publishable_x6A2XiGzM9F2Qlk9xwBUvA_UK3HoJJz";

const sb = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


// ======================================
// 2. VALIDAR FORMULARIO
// ======================================

document.getElementById("loginForm")
.addEventListener("submit", async function(e) {

    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value;

    const mensaje = document.getElementById("mensaje");
    const boton = document.getElementById("btnEnviar");

    if (!usuario || !password) {
        mensaje.textContent = "Completa todos los campos.";
        return;
    }

    boton.disabled = true;
    mensaje.textContent = "Validando credenciales...";
    mensaje.style.color = "white";

    try {

        // ======================================
        // 3. CONSULTAR EDGE FUNCTION
        // ======================================

        const { data, error } = await sb.functions.invoke(
            "login-aunar",
            {
                body: {
                    usuario: usuario,
                    password: password
                }
            }
        );

        if (error || !data || !data.success) {

            mensaje.textContent =
                data?.message || "Usuario o contraseña incorrectos.";

            mensaje.style.color = "#ffaaaa";
            return;
        }

        // ======================================
        // 4. ACCESO AUTORIZADO
        // ======================================

        mensaje.textContent = "¡Bienvenido a AUNAR!";
        mensaje.style.color = "#90ee90";

        // Guardar solamente el nombre de usuario
        sessionStorage.setItem("usuarioAunar", usuario);

        // Redireccionar
        window.location.href = "bienvenido.html";

    } catch (error) {

        console.error("Error de autenticación:", error);

        mensaje.textContent =
            "No fue posible conectar con el servidor.";

        mensaje.style.color = "#ffaaaa";

    } finally {

        boton.disabled = false;

    }

});
