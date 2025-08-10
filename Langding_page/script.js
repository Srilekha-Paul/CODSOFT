document.addEventListener("DOMContentLoaded", () => {
    const menuBTN = document.getElementById("menu-btn");
    const navlinks = document.getElementById("nav_links");
    const menuBTNIcon = menuBTN.querySelector("i");

    menuBTN.addEventListener("click", () => {
        navlinks.classList.toggle("open");

        const isOpen = navlinks.classList.contains("open");
        menuBTNIcon.className = isOpen ? "ri-close-line" : "ri-menu-fill";
    });
});
