function mostrarHora() {
    const horaElemento = document.getElementById("hora");
    const ahora = new Date();
    horaElemento.textContent = `Hora: ${ahora.toLocaleTimeString()}`;
}

setInterval(mostrarHora, 1000);
mostrarHora();