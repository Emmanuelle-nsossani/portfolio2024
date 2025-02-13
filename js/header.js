document.addEventListener("DOMContentLoaded", function () {
    // VERSION DESKTOP
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    const header = document.querySelector("header");

    // Gestion du clic sur l'icône pour afficher/masquer le menu
    menuIcon.addEventListener("click", function (event) {
        const isVisible = menu.classList.contains("visible");

        // Toggle des classes
        menu.classList.toggle("hidden", isVisible);
        menu.classList.toggle("visible", !isVisible);
        overlay.classList.toggle("hidden", isVisible);
        overlay.classList.toggle("visible-overlay", !isVisible);

        event.stopPropagation(); // Empêche la propagation du clic
    });

    // Gestion du clic global pour fermer le menu et le calque sombre
    document.addEventListener("click", function (event) {
        if (menu.classList.contains("visible") && !header.contains(event.target)) {
            menu.classList.add("hidden");
            menu.classList.remove("visible");
            overlay.classList.add("hidden");
            overlay.classList.remove("visible-overlay");
        }
    });

    // Permet de fermer le menu en cliquant sur le calque sombre
    overlay.addEventListener("click", function () {
        menu.classList.add("hidden");
        menu.classList.remove("visible");
        overlay.classList.add("hidden");
        overlay.classList.remove("visible-overlay");
    });    

});
