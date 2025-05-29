function mostrarUbicacion() {
    const ubicacionElemento = document.getElementById("ubicacion");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            ubicacionElemento.textContent = `Ubicación: Lat ${latitude}, Lon ${longitude}`;
        }, () => {
            ubicacionElemento.textContent = "Ubicación no disponible";
        });
    } else {
        ubicacionElemento.textContent = "Geolocalización no soportada";
    }
}

mostrarUbicacion();