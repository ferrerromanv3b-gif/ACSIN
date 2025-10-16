let usuariosPermitidos = [];

fetch("users.json")
  .then(response => response.json())
  .then(data => {
    usuariosPermitidos = data.usuarios;
  });

document.getElementById("login-btn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const error = document.getElementById("login-error");

  if (usuariosPermitidos.includes(username)) {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("main-section").classList.remove("hidden");
  } else {
    error.textContent = "Usuario no autorizado.";
  }
});

document.getElementById("registrar-btn").addEventListener("click", () => {
  const participante = document.getElementById("nombre-participante").value.trim();
  const capacitador = document.getElementById("nombre-capacitador").value.trim();

  if (participante === "" || capacitador === "") {
    alert("Por favor completa todos los campos.");
    return;
  }

  document.getElementById("out-participante").textContent = participante;
  document.getElementById("out-capacitador").textContent = capacitador;

  const registroDiv = document.getElementById("registro");
  registroDiv.classList.remove("hidden");

  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: "https://www.gob.mx/stps",
    width: 128,
    height: 128,
    colorDark: "#0B3D91",
    colorLight: "#ffffff"
  });
});