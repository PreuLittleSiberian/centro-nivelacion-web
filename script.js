function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("show");
}

// Para móviles: abrir y cerrar submenús con clic
document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Evita que el enlace se active
        let parent = this.parentElement;
        parent.classList.toggle("active");
    });
});

function verMas() {
    alert("¡Más información próximamente!");
}
