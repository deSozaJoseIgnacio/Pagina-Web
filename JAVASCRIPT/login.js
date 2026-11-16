/* ============================================================
   LOGIN FALSO
   ============================================================ */

/* USUARIOS "GUARDADOS": editá esta lista para agregar o cambiar cuentas.
   Para iniciar sesión hay que escribir el mail y la contraseña de alguno. */
const USUARIOS = [
  { nombre: "Juan",  mail: "juan@gmail.com",  pass: "juan1234" },
  { nombre: "Maria", mail: "maria@gmail.com", pass: "maria1234" }
];

/* Usuario que tiene la sesión abierta (solo vive en la página, no se guarda) */
let usuarioActual = null;

const $ = (id) => document.getElementById(id);

/* ---------- Header ---------- */
function actualizarHeader() {
  $("auth-texto").textContent = usuarioActual ? usuarioActual : "Iniciar sesión";
  $("auth-menu").classList.remove("abierto");
}

["auth-zona","auth-boton","auth-texto","auth-menu","auth-salir","auth-fondo","auth-cerrar",
 "tab-login","tab-registro","form-login","form-registro",
 "login-mail","login-pass","login-enviar","login-error",
 "reg-nombre","reg-mail","reg-pass","reg-enviar","reg-error"
].forEach(id => { if (!document.getElementById(id)) console.error("FALTA en el HTML el id:", id); });

$("auth-boton").addEventListener("click", () => {
  if (usuarioActual) {
    $("auth-menu").classList.toggle("abierto");   // con sesión: muestra "Cerrar sesión"
  } else {
    abrirVentana("login");                         // sin sesión: abre login/registro
  }
});

$("auth-salir").addEventListener("click", () => {
  usuarioActual = null;                            // cerrar sesión: vuelve al principio
  actualizarHeader();
});

document.addEventListener("click", (e) => {
  if (!$("auth-zona").contains(e.target)) $("auth-menu").classList.remove("abierto");
});

/* ---------- Ventana ---------- */
function abrirVentana(modo) {
  $("auth-fondo").classList.add("abierto");
  cambiarModo(modo);
}
function cerrarVentana() {
  $("auth-fondo").classList.remove("abierto");
  ["login-mail", "login-pass", "reg-nombre", "reg-mail", "reg-pass"].forEach(id => $(id).value = "");
  $("login-error").textContent = "";
  $("reg-error").textContent = "";
}
function cambiarModo(modo) {
  const login = modo === "login";
  $("form-login").style.display = login ? "block" : "none";
  $("form-registro").style.display = login ? "none" : "block";
  $("tab-login").classList.toggle("activa", login);
  $("tab-registro").classList.toggle("activa", !login);
}

$("auth-cerrar").addEventListener("click", cerrarVentana);
$("auth-fondo").addEventListener("click", (e) => { if (e.target === $("auth-fondo")) cerrarVentana(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarVentana(); });
$("tab-login").addEventListener("click", () => cambiarModo("login"));
$("tab-registro").addEventListener("click", () => cambiarModo("registro"));

/* ---------- Iniciar sesión ---------- */
$("login-enviar").addEventListener("click", () => {
  const mail = $("login-mail").value.trim();
  const pass = $("login-pass").value;
  const encontrado = USUARIOS.find(u => u.mail === mail && u.pass === pass);

  if (!encontrado) {
    $("login-error").textContent = "Correo o contraseña incorrectos.";
    return;
  }
  usuarioActual = encontrado.nombre;   // el header muestra el nombre guardado en el JS
  actualizarHeader();
  cerrarVentana();
});

/* ---------- Registrarse ---------- */
function mailValido(mail) {
  // debe tener un @ con texto antes y texto después
  const pos = mail.indexOf("@");
  return pos > 0 && pos < mail.length - 1;
}

$("reg-enviar").addEventListener("click", () => {
  const nombre = $("reg-nombre").value.trim();
  const mail   = $("reg-mail").value.trim();
  const pass   = $("reg-pass").value;

  if (nombre === "") { $("reg-error").textContent = "Escribí un nombre de usuario."; return; }
  if (!mailValido(mail)) { $("reg-error").textContent = "El correo debe tener texto antes y después del @."; return; }
  if (pass.length <= 8) { $("reg-error").textContent = "La contraseña debe tener más de 8 caracteres."; return; }

  // Registro falso: NO se guarda nada, solo se muestra el nombre en el header
  usuarioActual = nombre;
  actualizarHeader();
  cerrarVentana();
});

/* Enter para enviar */
["login-mail", "login-pass"].forEach(id => $(id).addEventListener("keydown", e => { if (e.key === "Enter") $("login-enviar").click(); }));
["reg-nombre", "reg-mail", "reg-pass"].forEach(id => $(id).addEventListener("keydown", e => { if (e.key === "Enter") $("reg-enviar").click(); }));
