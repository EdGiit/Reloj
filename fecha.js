function mostrarFecha() {
    const fechaElemento = document.getElementById("fecha");
    const ahora = new Date();
    fechaElemento.textContent = `Fecha: ${ahora.toLocaleDateString()}`;
}

mostrarFecha();