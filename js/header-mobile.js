document.addEventListener("DOMContentLoaded", function () {
    // VERSION MOBIKE
    const menuIcon = document.getElementById("menu-icon-mobile");
    const menu = document.getElementById("menu-mobile");
    const overlay = document.getElementById("overlay-mobile");
    const header = document.getElementById("header-mobile");

    // Gestion du clic sur l'icône pour afficher/masquer le menu
    menuIcon.addEventListener("click", function (event) {
        const isVisible = menu.classList.contains("visible");

        // Toggle des classes
        menu.classList.toggle("hidden", isVisible);
        header.classList.toggle("header-open", !isVisible);
        overlay.classList.toggle("hidden", isVisible);
        overlay.classList.toggle("visible-overlay", !isVisible);

        event.stopPropagation(); // Empêche la propagation du clic
    });

    // // Gestion du clic global pour fermer le menu et le calque sombre
    // document.addEventListener("click", function (event) {
    //     if (menu.classList.contains("visible") && !header.contains(event.target)) {
    //         menu.classList.add("hidden");
    //         menu.classList.remove("visible");
    //         overlay.classList.add("hidden");
    //         overlay.classList.remove("visible-overlay");
    //     }
    // });

    // // Permet de fermer le menu en cliquant sur le calque sombre
    // overlay.addEventListener("click", function () {
    //     menu.classList.add("hidden");
    //     menu.classList.remove("visible");
    //     overlay.classList.add("hidden");
    //     overlay.classList.remove("visible-overlay");
    // });    

});
