
const formulario = document.getElementById("formNavidad");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const grupo = document.getElementById("grupo").value;
    const gusto = document.getElementById("gusto").value;
    const mensaje = document.getElementById("mensaje").value;

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
        <h3>🎄 ¡Gracias, ${nombre}! 💚</h3>
        <p>Grupo: ${grupo}</p>
        <p>Te gusta: ${gusto}</p>
        <p>Tu mensaje: ${mensaje}</p>
        <p>¡La comunidad CECyTEM te desea una feliz Navidad!</p>
    `;

    formulario.reset();
});
