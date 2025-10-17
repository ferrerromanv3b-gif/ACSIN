// Usuarios permitidos directamente (sin JSON ni fetch)
let usuariosPermitidos = ["juan", "maria", "pedro"];

function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function entrarUsuario(username) {
  document.getElementById("login-section").classList.add("hidden");
  document.getElementById("main-section").classList.remove("hidden");
  document.getElementById("nombre-usuario").textContent = username;
  mostrarSeccion("inicio");
}

document.getElementById("login-btn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const error = document.getElementById("login-error");

  if (usuariosPermitidos.includes(username)) {
    entrarUsuario(username);
  } else {
    error.textContent = "Usuario no autorizado.";
    error.classList.remove("hidden");
  }
});

document.getElementById("registrar-btn").addEventListener("click", () => {
  const participante = document.getElementById("nombre-participante").value.trim();
  const capacitador = document.getElementById("nombre-capacitador").value.trim();

  if (!participante || !capacitador) {
    alert("Por favor completa todos los campos.");
    return;
  }

  document.getElementById("out-participante").textContent = participante;
  document.getElementById("out-capacitador").textContent = capacitador;
  document.querySelector(".resultados").classList.remove("hidden");

  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: `https://www.gob.mx/stps`,
    width: 128,
    height: 128,
    colorDark: "#0B3D91",
    colorLight: "#ffffff"
  });
});


