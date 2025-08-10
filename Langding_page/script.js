document.addEventListener("DOMContentLoaded", () => {
    const menuBTN = document.getElementById("menu-btn");
    const navlinks = document.getElementById("nav_links");
    const icon = menuBTN.querySelector("i");

    menuBTN.addEventListener("click",() =>{
        navlinks.classList.toggle("open");
        icon.className = navlinks.classList.contains("open") ? "ri-close-line" : "ri-menu-fill";
    });
    
    
});